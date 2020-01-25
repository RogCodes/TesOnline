<?php
function jum_kata($str){
    $data = null;
    $str_r = str_replace(" ", "", $str);
    $uniq = array_unique(str_split($str_r));
    foreach($uniq as $value){
        $data .= "Jumlah ".$value." ada ".substr_count($str, $value)." biji\n";
    }
    return $data;
}
function jum_spasi_dan_kalimat($str){
    $str2 = trim($str);
    $preg = preg_replace("/\s+/", " ", $str2);
    $exp = explode(" ", $preg);
    $data = "Jumlah kata = ".count($exp)."\njumlah spasi = ".substr_count($str, " ")."\n"
    return $data;
}
function jum_huruf_perkata($str){
$data =null;
$str = trim($str);
$preg = preg_replace("/\s+/", " ", $str);
$exp = explode(" ", $preg);
for($a=1; $a<=count($exp); $a++){
$data .= "Jumlah kata ke-".$a." = ".strlen($exp[$a-1])."\n";
}
return $data;
}
?>