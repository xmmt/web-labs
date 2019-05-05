<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Новостной сайт</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <h1>Новостной сайт</h1>
        <div>
            <?php foreach($articles as $a): ?>
            <div class="article">
                <h3><a href="artcle.php?id=<?=$a['id']?>"><?=$a['title']?></a></h3>
                <em>Опубликовано: <?=$a['date']?></em>
                <p><?=$a['content']?></p>
            </div>
            <?php endforeach ?>
        </div>
        <footer>
            <p>Новостной сайт<br>Copyright &copy; 2015</p>
        </footer>
    </div>
</body>
</html>