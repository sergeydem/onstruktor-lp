<?php


if((isset($_POST['username'])&&$_POST['username']!="")&&(isset($_POST['phone-user'])&&$_POST['phone-user']!="")){//Проверка отправилось ли наше поля name и не пустые ли они
    $to = 's.demjanenko@artorg.com.ua'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Обратный звонок'; //Загаловок сообщения
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['username'].'</p>
                        <p>Телефон: '.$_POST['phone-user'].'</p>
                        <p>Комментарий: '.$_POST['comment'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $send = mail($to, $subject, $message, $headers);

}

?>
