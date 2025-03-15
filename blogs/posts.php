<?php
session_start(); // Start the session

include '../blog-dashboard/config/db.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$post = null;
$current_views = 0;

// Get the slug from the URL path
$request_uri = $_SERVER['REQUEST_URI'];
$slug = basename($request_uri);

if (empty($slug)) {
    echo json_encode(["error" => "Invalid blog post slug"]);
    exit;
}

// Fetch blog post by slug
$sql = "SELECT 
            b.*, 
            sm.seo_title, 
            sm.seo_description, 
            sm.seo_keywords,
            sm.seo_slug,
            sm.canonical_url,
            sm.meta_robots,
            sm.og_title,
            sm.og_description
        FROM blogs b 
        LEFT JOIN seo_meta sm ON b.id = sm.post_id 
        WHERE sm.seo_slug = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $slug);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    http_response_code(404);
    echo json_encode(["error" => "Blog post not found"]);
    exit;
}

$post = $result->fetch_assoc();
$current_views = intval($post['views']);

// Check if the user has already viewed this post in the current session
if (!isset($_SESSION['viewed_posts'])) {
    $_SESSION['viewed_posts'] = []; // Initialize the viewed posts array
}

if (!in_array($post['id'], $_SESSION['viewed_posts'])) {
    // Increment the view count
    $current_views += 1;

    // Update the view count in the database
    if (!isset($_GET['admin']) || $_GET['admin'] != 'true') {
        $update_sql = "UPDATE blogs SET views = ? WHERE id = ?";
        $update_stmt = $conn->prepare($update_sql);
        $update_stmt->bind_param("ii", $current_views, $post['id']);
        $update_stmt->execute();
        $update_stmt->close();
    }

    // Mark this post as viewed by the user
    $_SESSION['viewed_posts'][] = $post['id'];
}

// Fetch comments for this post
$comments_sql = "SELECT * FROM comments WHERE post_id = ? ORDER BY created_at DESC";
$comments_stmt = $conn->prepare($comments_sql);
$comments_stmt->bind_param("i", $post['id']);
$comments_stmt->execute();
$comments_result = $comments_stmt->get_result();
$comments = $comments_result->fetch_all(MYSQLI_ASSOC);

// Fetch top news articles for the sidebar, excluding the current article
$blogsPerPage = 8; // Number of blogs to display in the sidebar
$current_post_id = $post['id']; // Get the ID of the current post

$top_news_sql = "SELECT b.*, sm.seo_slug 
                 FROM blogs b 
                 LEFT JOIN seo_meta sm ON b.id = sm.post_id 
                 WHERE b.id != ? -- Exclude the current article
                 ORDER BY b.created_at DESC 
                 LIMIT ?";
$top_news_stmt = $conn->prepare($top_news_sql);
$top_news_stmt->bind_param("ii", $current_post_id, $blogsPerPage); // Bind both parameters
$top_news_stmt->execute();
$top_news_result = $top_news_stmt->get_result();
$top_news_articles = $top_news_result->fetch_all(MYSQLI_ASSOC);
$top_news_stmt->close();

// Handle comment submission
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit_comment'])) {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $comment = filter_input(INPUT_POST, 'comment', FILTER_SANITIZE_STRING);

    if (!empty($name) && !empty($email) && !empty($comment)) {
        $insert_sql = "INSERT INTO comments (post_id, name, email, comment) VALUES (?, ?, ?, ?)";
        $insert_stmt = $conn->prepare($insert_sql);
        $insert_stmt->bind_param("isss", $post['id'], $name, $email, $comment);
        if ($insert_stmt->execute()) {
            header("Location: " . $_SERVER['REQUEST_URI']);
            exit;
        } else {
            echo "<script>alert('Error submitting comment!');</script>";
        }
        $insert_stmt->close();
    } else {
        echo "<script>alert('Please fill out all fields!');</script>";
    }
}

$stmt->close();
$comments_stmt->close();
$conn->close();

// Generate canonical URL
$base_url = "https://flexymarkets.com/posts/";
$canonical_url = $base_url . htmlspecialchars($post['seo_slug']);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($post['title']); ?> - Flexy Markets</title>
    <!-- SEO Meta Tags -->
    <meta name="title" content="<?php echo htmlspecialchars($post['seo_title'] ?? $post['title']); ?>">
    <meta name="description" content="<?php echo htmlspecialchars($post['seo_description'] ?? 'A blog post by ' . $post['author']); ?>">
    <meta name="keywords" content="<?php echo htmlspecialchars($post['seo_keywords'] ?? 'blog, post, article'); ?>">
    <meta name="author" content="<?php echo htmlspecialchars($post['author']); ?>">
    <!-- Open Graph -->
    <meta property="og:title" content="<?php echo htmlspecialchars($post['og_title'] ?? $post['title']); ?>">
    <meta property="og:description" content="<?php echo htmlspecialchars($post['og_description'] ?? 'A blog post by ' . $post['author']); ?>">
    <meta property="og:image" content="<?php echo !empty($post['featured_image']) ? "https://flexymarkets.com/blog-dashboard/uploads/" . htmlspecialchars($post['featured_image']) : ''; ?>">
    <meta property="og:url" content="<?php echo $canonical_url; ?>">
    <!-- Canonical URL -->
    <link rel="canonical" href="<?php echo $canonical_url; ?>">
    <!-- Robots Meta Tag -->
    <meta name="robots" content="<?php echo htmlspecialchars($post['meta_robots'] ?? 'index, follow'); ?>">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome Icons -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link href="https://flexymarkets.com/css/navigation.css" rel="stylesheet">
    <link href="https://flexymarkets.com/css/style.css" rel="stylesheet">
    <!-- Favicon -->
    <link rel="icon" href="https://flexymarkets.com/images/favicon.ico" type="image/x-icon" />
    <link rel="apple-touch-icon" sizes="180x180" href="https://flexymarkets.com/images/favicon.ico" />
    <link rel="icon" type="image/png" sizes="32x32" href="https://flexymarkets.com/images/favicon.ico" />
    <link rel="icon" type="image/png" sizes="16x16" href="https://flexymarkets.com/images/favicon.ico" />
    <style>
        body {
            background-color: white;
            font-family: 'Arial', sans-serif;
        }

        @media (max-width: 768px) {
            .search-box {
                width: 100%;
                margin: 10px auto;
            }
            .btn-account {
                width: 100%;
                text-align: center;
                margin-top: 10px;
            }
            .login-link {
                display: block;
                text-align: center;
                margin-top: 5px;
            }
            .navbar-toggler {
                background-color: white;
            }
            .navbar-collapse {
                text-align: center;
            }

            .post_container {
            max-width: 100% !important;
            margin: 40px auto;
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        }

        .dropdown-item {
            transition: transform 0.3s, background-color 0.3s;
        }

        .dropdown-item:hover {
            transform: scale(1.05);
            background-color: rgba(15, 73, 65, 0.1);
        }

        .dark-mode {
            background-color: rgb(54, 54, 54);
            color: #f8f9fa;
        }

        .dark-mode a {
            color: #f8f9fa;
        }

        .dark-mode .container {
            background-color: #222;
            color: #f8f9fa;
        }

        .dark-mode .table>:not(caption)>*>* {
            border-color: #444;
            background: #222;
            color: white;
        }

        .toggle-dark {
            position: fixed;
            top: 20px;
            right: 20px;
        }

        .post_container {
            max-width: 80%;
            margin: 40px auto;
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        
     

        .featured-img {
            width: 100%;
            height: auto;
            border-radius: 10px;
            margin-bottom: 50px;
        }

        .post_container img {
            max-width: 100%;
            height: auto;
            display: block;
            margin-top: 10px;
            margin-bottom: 20px;
        }

        .comment-section {
            margin-top: 40px;
        }

        .comment {
            border-bottom: 1px solid #ddd;
            padding: 10px 0;
        }

        .comment:last-child {
            border-bottom: none;
        }

        .comment-author {
            font-weight: bold;
            color: #333;
        }

        .comment-date {
            font-size: 0.9em;
            color: #666;
        }

        .comment-form {
            margin-top: 20px;
        }
        
       
    .sidebar {
        background: #f9f9f9;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        margin-top: 40px;
    }

    .sidebar-article {
        margin-bottom: 20px;
    }

    .sidebar-article img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        margin-bottom: 10px;
    }

    .sidebar-article h4 {
        font-size: 1.2em;
        margin-bottom: 5px;
    }

    .sidebar-article p {
        font-size: 0.9em;
        color: #666;
    }    </style>
</head>
<body>
   <!-- Header -->
   <nav class="navbar navbar-expand-lg" style="background-color: #336699; padding: 15px;">
        <div class="container-fluid">
            <a class="navbar-brand" href="#" style="font-weight: bold; color: white; font-size: 22px; width: 110px;">
               <img src="http://localhost/mql5/src/assets/logo.png" alt="logo" style="width: 100%;">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#" style="color: white; font-weight: bold;">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" style="color: white; font-weight: bold;">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" style="color: white; font-weight: bold;">Market News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" style="color: white; font-weight: bold;">Contact</a>
                    </li>
                </ul>
                <div class="d-flex flex-column flex-lg-row align-items-lg-center">
                    <div class="search-container" style="position: relative; margin-bottom: 10px;">
                        <input type="text" class="form-control search-box" placeholder="search..." 
                            style="border-radius: 50px; padding: 5px 10px; width: 200px;">
                        <i class="fas fa-search" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: #336699;"></i>
                    </div>
                    <button class="btn btn-account ms-lg-3" style="background-color: #FFB400; color: white; font-weight: bold; border-radius: 5px; padding: 5px 10px; border: none;">
                        CREATE AN ACCOUNT
                    </button>
                    <a href="#" class="login-link ms-lg-3" style="color: white; font-weight: bold;">Log in</a>
                </div>
            </div>
        </div>
    </nav>


    <!-- Main Content and Sidebar -->
    <div class="container-fluid">
        <div class="row">
            <!-- Main Content -->
            <div class="col-md-9">
                <div class="post_container">
                    
                    
                    <?php if (!empty($post['featured_image'])): ?>
                        <img src="<?php echo "http://localhost/mql5/blog-dashboard/uploads/" . htmlspecialchars($post['featured_image']); ?>" alt="<?php echo htmlspecialchars($post['title']); ?>" class="featured-img">
                    <?php endif; ?>
                    <h1 class="mb-4"><?php echo htmlspecialchars($post['title']); ?></h1>
                    <p><strong>By:</strong> <?php echo htmlspecialchars($post['author']); ?></p>
                    <p><small class="text-muted">Published on: <?php echo date("M d, Y", strtotime($post['created_at'])); ?></small></p>
                    <hr>
                    
                    <p class="post-content"><?php echo nl2br($post['content']); ?></p>

                    <!-- Comment Section -->
                    <div class="comment-section">
                        <h3>Comments</h3>
                        <?php if (count($comments) > 0): ?>
                            <?php foreach ($comments as $comment): ?>
                                <div class="comment">
                                    <div class="comment-author"><?php echo htmlspecialchars($comment['name']); ?></div>
                                    <div class="comment-date"><?php echo date("M d, Y H:i", strtotime($comment['created_at'])); ?></div>
                                    <p><?php echo htmlspecialchars($comment['comment']); ?></p>
                                </div>
                            <?php endforeach; ?>
                        <?php else: ?>
                            <p>No comments yet. Be the first to comment!</p>
                        <?php endif; ?>

                        <!-- Comment Form -->
                        <div class="comment-form">
                            <h4>Leave a Comment</h4>
                            <form action="/posts/<?php echo htmlspecialchars($post['seo_slug']); ?>" method="post">
                                <div class="mb-3">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" name="name" class="form-control" required>
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" name="email" class="form-control" required>
                                </div>
                                <div class="mb-3">
                                    <label for="comment" class="form-label">Comment</label>
                                    <textarea name="comment" class="form-control" rows="4" required></textarea>
                                </div>
                                <button type="submit" name="submit_comment" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sidebar -->
            <div class="col-md-3">
                <div class="sidebar">
                    <h3>Top News Articles</h3>
                    <?php if (count($top_news_articles) > 0): ?>
                        <?php foreach ($top_news_articles as $article): ?>
                            <div class="sidebar-article">
                                <a href="/posts/<?php echo htmlspecialchars($article['seo_slug']); ?>">
                                    <?php if (!empty($article['featured_image'])): ?>
                                        <img src="<?php echo "http://localhost/mql5/blog-dashboard/uploads/" . htmlspecialchars($article['featured_image']); ?>" alt="<?php echo htmlspecialchars($article['title']); ?>" class="sidebar-img">
                                    <?php endif; ?>
                                    <h4><?php echo htmlspecialchars($article['title']); ?></h4>
                                    <p><small class="text-muted">Published on: <?php echo date("M d, Y", strtotime($article['created_at'])); ?></small></p>
                                </a>
                            </div>
                        <?php endforeach; ?>
                    <?php else: ?>
                        <p>No news articles found.</p>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>

    <!-- Sticky Header Script -->
    <script>
        window.onscroll = function () {
            var header = document.querySelector(".header");
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        };
    </script>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>