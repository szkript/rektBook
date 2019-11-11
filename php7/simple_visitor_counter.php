<?php
//for create and start counter, after first use should be diasabled
//$file = fopen("visits.txt", "w") or die("Unable to open file!");
//fwrite($file, 0);
// now this is the good stuff xd
$file = fopen("visits.txt", "r") or die("Unable to open file!");
$count = fread($file,filesize("visits.txt"));
$count+=1;
$count -= 0.5;
$file = fopen("visits.txt", "w");
//$count = 0;
fwrite($file, $count);
fclose($file);
?>