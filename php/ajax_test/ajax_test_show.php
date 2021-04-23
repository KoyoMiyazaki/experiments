<?php
// GETメソッドでリクエストした値を取得
$id = $_GET['id'];

// データベース接続
$host = '127.0.0.1';
$dbname = 'test';
$dbuser = 'php_user';
$dbpass = 'password123';

try {
    $pdo = new PDO("mysql:dbname={$dbname};host={$host};charset=utf8mb4", $dbuser, $dbpass,[
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_EMULATE_PREPARES => false
    ]);
} catch (PDOException $e) {
    var_dump($e->getMessage());
    exit;
}

// SQL
$stmt = $pdo->prepare("SELECT id, name, price FROM products WHERE id = :id");
$stmt->bindValue(":id", $id);
$stmt->execute();

$productList = array();

while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $productList[] = array(
        'id' => row['id'],
        'name' => row['name'],
        'price' => row['price'],
    );
}

header('Content-type: application/json');

echo json_encode($productList);