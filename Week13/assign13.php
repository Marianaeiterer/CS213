<?php

    $type = $_POST['performance'];
    $location = $_POST['location'];
    $room = $_POST['room'];
    $time = $_POST['time_slot'];
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $id = $_POST['student_id'];
    $skill = $_POST['skill'];
    $instrument = $_POST['instrument'];

    if($type == "Duet"){
        $first_name2 = $_POST['first_name_2'];
        $last_name2 = $_POST['last_name_2']; 
        $id2 = $_POST['student_id_2'];
        $skill2 = $_POST['skill_2'];
        $instrument2 = $_POST['instrument_2'];
    }

    if($type == "Duet"){
        $inputArray = array("performance" => $type, "location" => $location, "room" => $room, "time" => $time, "first_name" => $first_name,
            "last_name" => $last_name, "id" => $id, "skill" => $skill, "instrument" => $instrument, "first_name_2" => $first_name2,
            "last_name_2"=> $last_name2, "id_2"=> $id2, "skill_2"=> $skill2, "instrument_2" => $instrument2);
    }else{
        $inputArray = array( "performance" => $type, "location" => $location, "room" => $room, "time" => $time, "first_name" => $first_name,
        "last_name" => $last_name, "id" => $id, "skill" => $skill, "instrument" => $instrument);
    }
    
    
    $myFile = "data/data.txt";
    $inside = [];
    if(file_exists($myFile)){
        $inside = file_get_contents($myFile);
        $inside = json_decode($inside);
    }
    if($location == null || $location == ""){
        $inside = json_encode($inside);
    }else{
        $inside[] = $inputArray;
        $inside = json_encode($inside);
        file_put_contents($myFile, $inside);
    }     

    print "\n $inside \n";   //output the json string - The string is sent to the browser.    
?>