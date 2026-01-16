<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../PHPMailer/src/Exception.php';
require __DIR__ . '/../PHPMailer/src/PHPMailer.php';
require __DIR__ . '/../PHPMailer/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phoneNumber']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        exit('البريد الإلكتروني غير صالح!');
    }

    $mail = new PHPMailer(true);

    try {
        $mail->CharSet = 'UTF-8'; // دعم اللغة العربية
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'dhomlmgyr@gmail.com'; 
        $mail->Password   = 'xtovuupokztzrpxl'; 
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        $mail->setFrom('dhomlmgyr@gmail.com', 'موقعي الشخصي');
        $mail->addReplyTo($email, $name); 
        $mail->addAddress('dhomlmgyr@gmail.com', 'موقعي الشخصي'); 

        $mail->isHTML(true);
        $mail->Subject = 'رسالة جديدة من موقعي الشخصي';
        $mail->Body    = "
            <h3>بيانات المرسل:</h3>
            <p><strong>الإسم:</strong> $name</p>
            <p><strong>رقم الجوال:</strong> $phone</p>
            <p><strong>البريد الإلكتروني:</strong> $email</p>
            <p><strong>الرسالة:</strong><br>$message</p>
        ";

        $mail->send();
        echo 'تم إرسال رسالتك بنجاح!';
    } catch (Exception $e) {
        echo "حدث خطأ أثناء الإرسال: {$mail->ErrorInfo}";
    }
}
?>
