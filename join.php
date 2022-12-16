<?php
          error_reporting( E_ALL );
          ini_set( "display_errors", 1 );
        
        header('Content-Type:text/plain; charset=utf-8');

        $id=$_POST['userId'];
        $pw=$_POST['pw'];
        $name=$_POST['name'];
        $email=$_POST['email'];
        $zipcode=$_POST['zipcode'];
        $address=$_POST['address'];
        $phone=$_POST['phone'];
    
        echo '우편번호 = ' . $zipcode . '<br>';
        echo '주소 = ' . $address . '<br>';
        echo '아이디 = ' . $id . '<br>';

        $name = addslashes($name);
        $address = addslashes($address);

        $db=mysqli_connect("localhost","ezra2022","ezra1409*","ezra2022");
        mysqli_query($db,"set names utf8");
    
        $sql="INSERT INTO signup(id, pw, name, email, post, addr, phone)
        VALUES('$id','$pw', '$name', '$email', '$zipcode','$address', '$phone')";
        $result=mysqli_query($db, $sql);
    
        if($result) echo "정보 입력 완료" . json_encode($result);
        else echo "정보 입력 실패" . json_encode($result);
        
        mysqli_close($db);
?>