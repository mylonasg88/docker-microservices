var express = require("express");
var router = express.Router();
const axios = require('axios');


router.get("/users", async (req, res) => {

    const users = [{id:1, name: 'George'}, {id:2, name: 'Alex'}];

    res.send({message: 'Users url DC-NODE-2', data: users});
});

module.exports = router;
