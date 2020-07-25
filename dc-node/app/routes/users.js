var express = require("express");
var router = express.Router();
const axios = require('axios');
const fetch = require('node-fetch');

router.get("/users", async (req, res) => {
    // console.log(process.env);
    console.log('Running');
    const options = {method: 'GET', url: 'localhost', port: 8081};

    // fetch("http://127.0.0.1:8082").then(response => {
    // fetch("http://localhost:9000").then(response => {
    //     console.log(response.data);
    //     res.send([{name: "George"}, {name: "Giannina"}]);
    // }).catch(error => {
    //     console.log(error);
    //     res.send(error);
    // })

    var http = require('http');
    try {
        http.get("http://dc-node:9000", function (result) {
            console.log("Received response: " + result.statusCode);
            res.send(result)
        });
    } catch(error){
        console.log(error);
        res.send(error);
    }

    // fetch("http://dc-node:9000").then(response => {
    //     console.log(response.data);
    //     res.send([{name: "George"}, {name: "Giannina"}]);
    // }).catch(error => {
    //     console.log(error);
    //     res.send(error);
    // })

    // axios(options).then(response => {
    //     console.log(response.data);
    //     res.send([{name: "George"}, {name: "Giannina"}]);
    // }).catch(error => {
    //     console.log(error);
    //     res.send({Error: error})
    // });
});

async function doCurl(){
    const { exec } = require("child_process");

    exec("curl dc-node-2:9000", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return error;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return stderr;
        }
        console.log(`stdout: ${stdout}`);
        return stdout
    });
}

module.exports = router;
