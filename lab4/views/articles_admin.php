<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Новостной сайт</title>
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <h1>Новостной сайт</h1>
        <div>
            <a href="index.php?action=add">Добавить</a>
            <table class="admin-table">
                <tr>
                    <th>Дата</th>
                    <th>Заголовок</th>
                    <th></th>
                    <th></th>
                </tr>
                <?php foreach($articles as $a): ?>
                <tr>
                    <td><?=$a['date']?></td>
                    <td><?=$a['title']?></td>
                    <td>
                        <a href="index.php?action=edit&id=<?=$a['id']?>">Редактировать</a>
                    </td>
                    <td>
                        <a href="index.php?action=delete&id=<?=$a['id']?>">Удалить</a>
                    </td>
                </tr>
                <?php endforeach ?>
            </table>
        </div>
        <footer>
            <p>Новостной сайт<br>Copyright &copy; 2015</p>
        </footer>
    </div>
</body>
</html>