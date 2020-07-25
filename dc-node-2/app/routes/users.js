var express = require("express");
var router = express.Router();
const axios = require('axios');


router.get("/users", async (req, res) => {

    res.send('Works DC-NODE-2');
});

module.exports = router;
