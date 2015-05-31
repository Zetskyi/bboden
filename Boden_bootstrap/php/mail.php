<meta charset="UTF-8">
<?php
  function sendMail(){
        $msg                = $_POST["emailContent"];
        $userEmail          = $_POST["userEmailPartOne"];
       
        $userEmail          = wordwrap($msg,70);
        

        mail("ndpp.boden@gmail.com",$userEmail,$msg);
        $k = '<script> var r = alert("Ваше повідомлення надіслано. Дякуємо.");
                            if(r=true){window.history.back();}
            </script>';
        echo $k;
        }
sendMail();
?>