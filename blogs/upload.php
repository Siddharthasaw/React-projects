<?php
require_once '../blog-dashboard/config/db.php';

$target_dir = "../uploads/";
if (!file_exists($target_dir)) {
    mkdir($target_dir, 0777, true);
}

if ($_FILES['file']['error'] === UPLOAD_ERR_OK) {
    $image_ext = strtolower(pathinfo($_FILES["file"]["name"], PATHINFO_EXTENSION));
    $allowed_ext = ["jpg", "jpeg", "png"];

    if (!in_array($image_ext, $allowed_ext)) {
        echo json_encode(['error' => 'Invalid file type. Only JPG, JPEG, PNG allowed.']);
        exit;
    }

    $new_image_name = uniqid("img_", true) . "." . $image_ext;
    $target_file = $target_dir . $new_image_name;

    if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
        echo json_encode(['location' => $target_file]);
    } else {
        echo json_encode(['error' => 'File upload failed.']);
    }
} else {
    echo json_encode(['error' => 'No file uploaded.']);
}
?>
