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

    fetch("http://localhost:8082").then(response => {
        console.log(response.data);
        res.send([{name: "George"}, {name: "Giannina"}]);
    }).catch(error => {
        console.log(error);
        res.send(error);
    })

    // axios(options).then(response => {
    //     console.log(response.data);
    //     res.send([{name: "George"}, {name: "Giannina"}]);
    // }).catch(error => {
    //     console.log(error);
    //     res.send({Error: error})
    // });
});

module.exports = router;
