<?php
    $id=$_POST['id'];
    $pw=$_POST['pw'];
    $name=$_POST['name'];
    $email=$_POST['email'];
    $addr1=$_POST['addr1']
    $addr2=$_POST['addr2'];
    $phone1=$_POST['phone1'];
    $phone2=$_POST['phone2'];
    $phone3=$_POST['phone3'];

    $db=mysqli_connect("localhost","ezra2022","ezra1409*","ezra2022");
    mysqli_query($db,"set names utf8");

    $sql=""
?>