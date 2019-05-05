<?php
define('MYSQL_SERVER', 'localhost');
define('MYSQL_USER', 'j99922rf_newssit');
define('MYSQL_PASSWORD', '111111');
define('MYSQL_DB', 'j99922rf_newssit');

function db_connect() {
    $link = mysqli_connect(MYSQL_SERVER, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB) or die("Error: link ".mysqli_error($link));
    
    if (!mysqli_set_charset($link, "utf8")) {
        printf("Error: tf8".mysqli_error($link));
    }
    
    return $link;
}

?>