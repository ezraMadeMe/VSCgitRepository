<?php
    function check_id(input){
        //아이디 중복검사
        header('Content-Type:application/x-javascript; charset=utf-8');

        $id=input;

        $db=mysqli_connect("localhost","ezra2022","ezra1409*","ezra2022");
        mysqli_query($db,"set names utf8");
    
        echo '아이디 = ' . $id;
    
        $sql="SELECT COUNT(*)
        FROM signup
        WHERE id=$id"
        $result=mysqli_query($db, $sql);
    
        if($result != 0 ){
            $finish = "중복된 ID입니다";
            echo "<script>alert('{$finish}');</script>";
        }else{
            $finish = "사용 가능한 ID입니다";
            echo "<script>alert('{$finish}');</script>";
        }
    
        echo json_encode($result);
        echo '<script>alert($result . $finish)</script>';
        mysqli_close($db);
    }
?>