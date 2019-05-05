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
            <form method="post" action="index.php?action=add">
                <label>
                    Название
                    <input type="text" name="title" value="" class="form-item" autofocus required>
                </label>
                <label>
                    Дата
                    <input type="date" name="date" value="" class="form-item" required>
                </label>
                <label>
                    Содержимое
                    <textarea class="form-item" name="content" required></textarea>
                </label>
                <input type="submit" value="Сохранить" class="btn">
            </form>
        </div>
        <footer>
            <p>Новостной сайт<br>Copyright &copy; 2015</p>
        </footer>
    </div>
</body>
</html>