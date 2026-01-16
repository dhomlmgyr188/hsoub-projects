<?php
$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "personal-website";
$port = 3306;

$conn = new mysqli($servername, $username, $password, $dbname, $port);
$conn->set_charset("utf8mb4");

if ($conn->connect_error) {
    die("فشل الاتصال بقاعدة البيانات: " . $conn->connect_error);
}

$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("إيميل غير صالح");
}

$check = $conn->prepare("SELECT id FROM newsletter WHERE email = ?");
$check->bind_param("s", $email);
$check->execute();
$check->store_result();

if($check->num_rows > 0){
    echo "هذا الإيميل مسجل مسبقًا";
    $check->close();
    exit;
}
$check->close();

$stmt = $conn->prepare("INSERT INTO newsletter (email) VALUES (?)");
$stmt->bind_param("s", $email);

if ($stmt->execute()) {
    echo "تم الاشتراك بنجاح";
} else {
    echo "حدث خطأ أثناء الاشتراك";
}

$stmt->close();
$conn->close();
