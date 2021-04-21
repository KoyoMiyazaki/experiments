<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>掲示板</title>
</head>
<body>
<h1>掲示板</h1>
    <section>
        <h2>投稿完了</h2>
        <button onclick="location.href='index.php'">戻る</button>
    </section>
<?php
// $id = null;
$name = $_POST["name"];
$contents = $_POST["contents"];
$created_at = date("Y-m-d H:i:s");

// DB接続
$pdo = new PDO("mysql:dbname=test;host=127.0.0.1;charset=utf8", "php_user", "password123",[
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_EMULATE_PREPARES => false
]);
if ($pdo) {
    echo "DB connection OK";
} else {
    echo "DB connection NG";
}

// SQL実行
$stmt = $pdo->prepare("INSERT INTO post (name, contents, created_at) VALUES (:name, :contents, :created_at)");
// $stmt->bindValue(":id", $id);
$stmt->bindValue(":name", $name);
$stmt->bindValue(":contents", $contents);
$stmt->bindValue(":created_at", $created_at);
$stmt->execute();

if ($stmt) {
    echo "registration successful";
} else {
    echo "registration failure";
}

// $stmt = $pdo->query("SELECT * FROM post");
// $result = $stmt->fetchall();
// var_dump($result);

?>
</body>
</html>