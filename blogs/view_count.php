<?php
include '../blog-dashboard/config/db.php';

if(isset($_GET['id'])) {
    $blog_id = $_GET['id'];
    $user_ip = $_SERVER['REMOTE_ADDR']; // User IP Address

    // Check if this IP has already viewed the blog
    $checkQuery = "SELECT * FROM blog_views WHERE blog_id = ? AND ip_address = ?";
    $stmt = $conn->prepare($checkQuery);
    $stmt->bind_param("is", $blog_id, $user_ip);
    $stmt->execute();
    $result = $stmt->get_result();

    if($result->num_rows == 0) { // If user has NOT viewed before
        // Insert new view record
        $insertQuery = "INSERT INTO blog_views (blog_id, ip_address) VALUES (?, ?)";
        $stmt = $conn->prepare($insertQuery);
        $stmt->bind_param("is", $blog_id, $user_ip);
        $stmt->execute();

        // Increase view count in 'blogs' table
        $updateQuery = "UPDATE blogs SET views = views + 1 WHERE id = ?";
        $stmt = $conn->prepare($updateQuery);
        $stmt->bind_param("i", $blog_id);
        $stmt->execute();
    }

    // Fetch blog details with view count
    $query = "SELECT title, content, meta_title, meta_description, views FROM blogs WHERE id = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $blog_id);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if($row = $result->fetch_assoc()) {
        echo "<title>{$row['meta_title']}</title>";
        echo "<meta name='description' content='{$row['meta_description']}'>";
        echo "<h1>{$row['title']}</h1>";
        echo "<p>{$row['content']}</p>";
        echo "<p><strong>Views:</strong> {$row['views']}</p>";
    } else {
        echo "Blog not found.";
    }
}
?>
