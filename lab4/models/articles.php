<?php

function articles_all($link) {
    //запрос
    $query = "SELECT * FROM articles ORDER BY id DESC";
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
    
    //извлечение из бд
    $n = mysqli_num_rows($result);
    $articles = array();
    
    for ($i = 0; $i < $n; $i++)
    {
        $row = mysqli_fetch_assoc($result);
        $articles[] = $row;
    }

    return $articles;
}

function articles_get($link, $id) {
    //запрос
    $query = sprintf("SELECT * FROM articles WHERE id=%d", (int)$id);
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
        
    $article = mysqli_fetch_assoc($result);
    
    return $article;
}

function articles_new($link, $title, $date, $content) {
    //Подготовка
    $title = trim($title);
    $content = trim($content);
    //Проверка
    if ($title == '')
        return false;
    //Запрос
    $t = "INSERT INTO articles (title, date, content) VALUES ('%s', '%s', '%s')";
    $query = sprintf($t, mysqli_real_escape_string($link, $title), mysqli_real_escape_string($link, $date), mysqli_real_escape_string($link, $content));
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
    return true;
}

function articles_delete($link, $id) {
    $id = (int)$id;
    if ($id == 0)
        return false;
    $query = sprintf("DELETE FROM articles WHERE id = '%d'", $id);
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
    return mysqli_affected_rows($link);
}

?>