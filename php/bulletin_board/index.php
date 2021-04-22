<?php
$pdo = new PDO("mysql:dbname=test;host=127.0.0.1;charset=utf8", "php_user", "password123",[
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_EMULATE_PREPARES => false
]);
// SQL実行
$stmt = $pdo->prepare("SELECT * FROM post ORDER BY created_at DESC LIMIT 20");
$stmt->execute();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>掲示板</title>
    <script src="jquery-3.6.0.min.js"></script>
    
</head>
<body>
    <h1>掲示板</h1>
    <section>
        <h2>新規投稿</h2>
        <!-- <form action="send.php" method="post"> -->
        <form id="form" action="send.php" method="post" target="sendData">
            <label for="name">名前：</label>
            <input type="text" name="name" id="name"><br>
            <label for="contents">投稿内容：</label>
            <input type="text" name="contents" id="contents"><br>
            <button class="send" type="submit">投稿</button>
        </form>
        <iframe name="sendData" style="width:0px;height:0px;border:0px;"></iframe>
        <!-- <iframe name="sendData" style="width:100px;height:1000px;border:0px;"></iframe> -->
    </section>

    <section>
        <h2>投稿内容一覧</h2>
            <?php foreach ($stmt as $row):?>
                <div>No：<?php echo $row['id']?></div>
                <div>名前：<?php echo $row['name']?></div>
                <div>投稿内容：<?php echo $row['contents']?></div>
                <div>投稿時間：<?php echo $row['created_at']?></div>
                <div>-----------------------------------------</div>
            <?php endforeach;?>
    </section>
    <script src="send.js"></script>
</body>
</html>