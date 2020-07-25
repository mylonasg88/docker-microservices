<?php
echo 'Hello World from dc-php <br>';

$ch = curl_init("dc-node-2:9000");

curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_PORT, 9000);

$data = curl_exec($ch);
if(curl_error($ch)) {
    echo curl_error($ch);
} else {
    var_dump($data);
}

curl_close($ch);
//Container dc-php can talk via `curl` request to dc-node-2 node container. However Node container can not talk to node container due to