const express = require("express");
const app = express();
const port = 80;

const userRoutes = require('./routes/users');

app.get("/", (req, res) => res.send("Hello World 43!sdf"));
app.use("/", userRoutes);

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);
