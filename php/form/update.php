<?php

const DB_HOST = 'mysql:dbname=test;host=127.0.0.1;charset=utf8';
const DB_USER = 'php_user';
const DB_PASSWORD = 'password123';

try {
    $pdo = new PDO(DB_HOST, DB_USER, DB_PASSWORD, [
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_EMULATE_PREPARES => false,
    ]);
    $stmt = $pdo->prepare("UPDATE datas SET text = :text, remarks = :remarks WHERE id = :id");
    $stmt->bindValue(':text', $_POST['text']);
    $stmt->bindValue(':remarks', $_POST['remarks']);
    $stmt->bindValue(':id', $_POST['id']);
    $stmt->execute();
} catch (PDOException $e) {
    echo '更新失敗' . $e->getMessage() . "\n";
    exit();
}

?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>更新完了</title>
</head>
<body>
    <p>更新しました</p>
    <p><a href="index.php">前画面へ</a></p>
</body>
</html>