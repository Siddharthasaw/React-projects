
<?php

// Database connection
include '../blog-dashboard/config/db.php';

// Fetch blogs from the database
$sql = "SELECT b.*, sm.seo_slug 
        FROM blogs b 
        LEFT JOIN seo_meta sm ON b.id = sm.post_id 
        ORDER BY b.created_at DESC";
$blog = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Latest Blogs - Flexy Markets</title>
    <!-- Bootstrap 5 CSS -->
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
            background-color: #f8f9fa;
            font-family: 'Arial', sans-serif;
        }
        
        .blog-card-link {
    text-decoration: none;
    color: inherit; /* Prevents link styling */
    display: block; /* Makes entire div clickable */
}



.blog-card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
}


        .blog-card {
            margin-bottom: 20px;
          border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
            background-color: #fff;
        }

    
        .blog-card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .blog-card .card-body {
            padding: 20px;
        }

        .blog-card .card-title {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 10px;
            color: #333;
        }

        .blog-card .card-text {
            font-size: 0.95rem;
            color: #555;
            margin-bottom: 15px;
        }

        .blog-card .card-footer {
            background-color: #f8f9fa;
            border-top: 1px solid #eee;
            padding: 10px 20px;
            font-size: 0.85rem;
            color: #777;
        }

        .btn-read-more {
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 8px 16px;
            border-radius: 5px;
            text-decoration: none;
            transition: background-color 0.3s;
        }

        .btn-read-more:hover {
            background-color: #0056b3;
        }

        /* Dark Mode */
        .dark-mode {
            background-color: #333;
            color: #f8f9fa;
        }

        .dark-mode .blog-card {
            background-color: #444;
            border-color: #555;
        }

        .dark-mode .blog-card .card-title,
        .dark-mode .blog-card .card-text {
            color: #f8f9fa;
        }

        .dark-mode .blog-card .card-footer {
            background-color: #555;
            border-color: #666;
            color: #f8f9fa;
        }

        .dark-mode .btn-read-more {
            background-color: #0056b3;
        }

        .dark-mode .btn-read-more:hover {
            background-color: #004080;
        }
    </style>
</head>
<body>
    
        <!-- Header -->
    <div class="header_lg">
        <header class="header">
            <div class="container">
                <div class="partner_row row">
                    <div class="col-lg-1 offset-lg-10" style="text-align: right;">
                        <a style="color: #000; font-weight:500" href="https://partners.flexymarkets.com/">Partnership</a>
                    </div>
                    <div class="col-lg-1" style="text-align: right;">
                        <a style="color: #000; font-weight:500; display:inline-block; border-left:1px solid #000; padding-left:35px" href="support.php">Support</a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-2">
                        <div class="header_logo_white">
                            <a href="https://flexymarkets.com/"><img src="https://flexymarkets.com/images/header_logo_dark.png" alt="Logo" /></a>
                        </div>
                    </div>
                    <div class="col-lg-10">
                        <div class="header_right">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="header_menu">
                                        <ul class="header_menu_ul social-media-trading d-flex justify-content-start">
                                            <!-- Mega Menu: Trading -->
                                            <li class="position-relative dropdown">
                                                <a class="dropdown-toggle header_menu_dropdown_button" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Trading
                                                </a>
                                                <div class="dropdown-menu mega-menu2 p-4 animated-dropdown">
                                                    <div class="row">
                                                        <div class="col-3">
                                                            <h6 class="dropdown-header">Accounts</h6>
                                                            <a class="dropdown-item" href="account.php">Account Types</a>
                                                        </div>
                                                        <div class="col-3">
                                                            <h6 class="dropdown-header">Markets</h6>
                                                            <a class="dropdown-item" href="https://flexymarkets.com/forex-trading.php">Forex Trading</a>
                                                            <a class="dropdown-item" href="https://flexymarkets.com/cryptocurrencies.php">Cryptocurrencies</a>
                                                            <a class="dropdown-item" href="https://flexymarkets.com/stock-derivatives.php">Stock Derivatives</a>
                                                            <a class="dropdown-item" href="https://flexymarkets.com/turbo-stocks.php">Turbo Stocks</a>
                                                            <a class="dropdown-item" href="https://flexymarkets.com/commodities.php">Commodities</a>
                                                            <a class="dropdown-item" href="https://flexymarkets.com/equity-indices.php">Equity Indices</a>
                                                            <a class="dropdown-item" href="https://flexymarkets.com/precious-metals.php">Precious Metals</a>
                                                            <a class="dropdown-item" href="https://flexymarkets.com/energies.php">Energies</a>
                                                            <a class="dropdown-item" href="https://flexymarkets.com/shares.php">Shares</a>
                                                            <a class="dropdown-item" href="https://flexymarkets.com/thematic-indices.php">Thematic Indices</a>
                                                        </div>
                                                        <div class="col-3">
                                                            <h6 class="dropdown-header">Platforms</h6>
                                                            <a class="dropdown-item" href="https://flexymarkets.com/mt5.php">MT5 Platform</a>
                                                        </div>
                                                        <div class="col-3">
                                                            <h6 class="dropdown-header">Our Offerings</h6>
                                                            <a class="dropdown-item" href="https://flexymarkets.com/flexy-copy-trading.php">Flexy Copy Trading</a>
                                                            <a class="dropdown-item" href="https://flexymarkets.com/execution-policy.php">Execution Policy</a>
                                                            <a class="dropdown-item" href="https://flexymarkets.com/margin-leverage.php">Margin and Leverage</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <!-- Mega Menu: Discover -->
                                            <li class="position-relative mx-3 dropdown">
                                                <a class="dropdown-toggle header_menu_dropdown_button" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Discover
                                                </a>
                                                <div class="dropdown-menu mega-menu p-4 animated-dropdown">
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <h6 class="dropdown-header">Education</h6>
                                                            <a class="dropdown-item" href="https://flexymarkets.com/learning_centre.php">Learning Centre</a>
                                                            <a class="dropdown-item" href="https://flexymarkets.com/live_education.php">Live Education</a>
                                                            <a class="dropdown-item" href="https://flexymarkets.com/blog">Blogs</a>
                                                        </div>
                                                        <div class="col-6">
                                                            <h6 class="dropdown-header">Community</h6>
                                                            <a class="dropdown-item" href="https://flexymarkets.com/news_and_analysis.php">News and Analysis</a>
                                                            <a class="dropdown-item" href="https://flexymarkets.com/analytical-tools.php">Analytical Tools</a>
                                                            <a class="dropdown-item" href="https://flexymarkets.com/economic_calender.php">Economic Calendar</a>
                                                            <a class="dropdown-item" href="https://flexymarkets.com/forex-calculator.php">Forex Calculators</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <!-- Standard Dropdown: Promotions -->
                                            <li class="mx-3">
                                                <a href="https://flexymarkets.com/promotion.php" class="header_menu_dropdown_button">Promotions</a>
                                            </li>

                                            <!-- Mega Menu: Company -->
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle header_menu_dropdown_button" href="#" id="companyDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Company
                                                </a>
                                                <div class="dropdown-menu mega-menu p-4 animated-dropdown">
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <a class="dropdown-item" href="https://flexymarkets.com/about.php">Who is Flexy Group?</a>
                                                            <a class="dropdown-item" href="https://flexymarkets.com/licences.php">Licences</a>
                                                            <a class="dropdown-item" href="https://flexymarkets.com/legal-document.php">Legal Documents</a>
                                                            <a class="dropdown-item" href="https://flexymarkets.com/flexy-csr.php">CSR</a>
                                                            <a class="dropdown-item" href="https://flexymarkets.com/contact.php">Contact Us</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-4 mt-20">
                                    <div class="header_button">
                                        <button type="button" class="btn header_menu_dropdown_button" style="border: 1px solid transparent" onclick="window.location.href='https://user.flexymarkets.com/login'">
                                            Login
                                        </button>
                                        <button type="button" class="btn btn-primary header_button_main" style="background-color: rgb(15, 73, 65); border-color:rgb(15, 73, 65);" onclick="window.location.href='https://user.flexymarkets.com/register'">
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>

    <!-- Mobile Header -->
    <div class="header_sm">
        <header id="header2" class="header">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="#">
                        <img src="images/header_logo_dark.png" alt="Logo" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" style="color: transparent; border: none">
                        <span class="navbar_toggler_icon mt-5">
                            <img src="images/hamburger_dark.png" />
                        </span>
                    </button>

                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <!-- Mega Menu: Trading -->
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="tradingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Trading
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="tradingDropdown">
                                        <li class="dropdown-header">Accounts</li>
                                        <li><a class="dropdown-item" href="https://flexymarkets.com/account.php">Account Types</a></li>
                                        <li class="dropdown-header">Markets</li>
                                        <li><a class="dropdown-item" href="https://flexymarkets.com/forex-trading.php">Forex Trading</a></li>
                                        <li><a class="dropdown-item" href="https://flexymarkets.com/cryptocurrencies.php">Cryptocurrencies</a></li>
                                        <li><a class="dropdown-item" href="https://flexymarkets.com/stock-derivatives.php">Stock Derivatives</a></li>
                                        <li><a class="dropdown-item" href="https://flexymarkets.com/turbo-stocks.php">Turbo Stocks</a></li>
                                        <li><a class="dropdown-item" href="https://flexymarkets.com/commodities.php">Commodities</a></li>
                                        <li><a class="dropdown-item" href="https://flexymarkets.com/equity-indices.php">Equity Indices</a></li>
                                        <li><a class="dropdown-item" href="https://flexymarkets.com/precious-metals.php">Precious Metals</a></li>
                                        <li><a class="dropdown-item" href="https://flexymarkets.com/energies.php">Energies</a></li>
                                        <li><a class="dropdown-item" href="https://flexymarkets.com/shares.php">Shares</a></li>
                                        <li><a class="dropdown-item" href="https://flexymarkets.com/thematic-indices.php">Thematic Indices</a></li>
                                        <li class="dropdown-header">Platforms</li>
                                        <li><a class="dropdown-item" href="https://flexymarkets.com/mt5.php">MT5 Platform</a></li>
                                        <li class="dropdown-header">Our Offerings</li>
                                        <li><a class="dropdown-item" href="https://flexymarkets.com/flexy-copy-trading.php">Flexy Copy Trading</a></li>
                                        <li><a class="dropdown-item" href="https://flexymarkets.com/execution-policy.php">Execution Policy</a></li>
                                        <li><a class="dropdown-item" href="https://flexymarkets.com/margin-leverage.php">Margin and Leverage</a></li>
                                    </ul>
                                </li>

                                <!-- Mega Menu: Discover -->
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="discoverDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Discover
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="discoverDropdown">
                                        <li class="dropdown-header">Education</li>
                                        <li><a class="dropdown-item" href="https://flexymarkets.com/learning_centre.php">Learning Centre</a></li>
                                        <li><a class="dropdown-item" href="https://flexymarkets.com/live_education.php">Live Education</a></li>
                                        <li class="dropdown-header">Community</li>
                                        <li><a class="dropdown-item" href="https://flexymarkets.com/news_and_analysis.php">News and Analysis</a></li>
                                        <li><a class="dropdown-item" href="https://flexymarkets.com/analytical-tools.php">Analytical Tools</a></li>
                                        <li><a class="dropdown-item" href="https://flexymarkets.com/economic_calender.php">Economic Calendar</a></li>
                                        <li><a class="dropdown-item" href="https://flexymarkets.com/forex-calculator.php">Forex Calculators</a></li>
                                    </ul>
                                </li>

                                <!-- Standard Dropdown: Promotions -->
                                <li class="nav-item">
                                    <a href="https://flexymarkets.com/promotion.php" class="nav-link">Promotions</a>
                                </li>

                                <!-- Mega Menu: Company -->
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="companyDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Company
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="companyDropdown">
                                        <li><a class="dropdown-item" href="https://flexymarkets.com/about.php">Who is Flexy Group?</a></li>
                                        <li><a class="dropdown-item" href="https://flexymarkets.com/licences.php">Licences</a></li>
                                        <li><a class="dropdown-item" href="https://flexymarkets.com/legal-document.php">Legal Documents</a></li>
                                        <li><a class="dropdown-item" href="https://flexymarkets.com/flexy-csr.php">CSR</a></li>
                                        <li><a class="dropdown-item" href="https://flexymarkets.com/contact.php">Contact Us</a></li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="https://partners.flexymarkets.com/" class="nav-link">Partnership
                                    <i class="fas fa-external-link-alt" style="margin-left: 5px;"></i>
                                    </a>
                                </li>
                            </ul>

                            <!-- Buttons: Login & Get Started -->
                            <div class="d-block mt-3">
                                <button type="button" class="btn btn-outline-secondary" onclick="window.location.href='https://user.flexymarkets.com/login'">
                                    Login
                                </button>
                                <button type="button" class="btn btn-primary ms-1" style="background-color: rgb(15, 73, 65); border-color:rgb(15, 73, 65);" onclick="window.location.href='https://user.flexymarkets.com/register'">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    </div>


<div class="container mt-5">
    <h1 class="text-center mb-5">Blog Posts</h1>
   <div class="row">
    <?php
    if ($blog->num_rows > 0) {
        while ($row = $blog->fetch_assoc()) {
            $slug = $row['seo_slug'];
            $featured_image = !empty($row['featured_image']) ? "https://flexymarkets.com/blog-dashboard/uploads/" . $row['featured_image'] : "https://via.placeholder.com/400x200";
            
            echo '<div class="col-md-4 col-sm-6 mb-4">';
            echo '<a href="../posts/' . $slug . '" class="blog-card-link">';
            echo '<div class="blog-card">';
            echo '<img src="' . $featured_image . '" alt="' . $row['title'] . '">';
            echo '<div class="card-body">';
            echo '<h5 class="card-title">' . $row['title'] . '</h5>';
            echo '<p class="card-text">' . substr($row['content'], 0, 100) . '...</p>';
            echo '</div>';
            echo '<div class="card-footer">';
            echo '<small>By ' . $row['author'] . ' on ' . date("M d, Y", strtotime($row['created_at'])) . '</small>';
            echo '</div>';
            echo '</div>';
            echo '</a>'; // Closing <a>
            echo '</div>';
        }
    } else {
        echo '<div class="col-12 text-center">No blogs found.</div>';
    }
    $conn->close();
    ?>
</div>

</div>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>