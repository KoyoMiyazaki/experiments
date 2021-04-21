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
        <h2>新規投稿</h2>
        <form action="send.php" method="post">
            <label for="name">名前：</label>
            <input type="text" name="name" id="name"><br>
            <label for="contents">投稿内容：</label>
            <input type="text" name="contents" id="contents"><br>
            <button type="submit">投稿</button>
        </form>
    </section>
</body>
</html>