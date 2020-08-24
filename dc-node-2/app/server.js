const express = require("express");
const app = express();
const port = 9000;

const userRoutes = require('./routes/users');

app.get("/", (req, res) => res.send("<h3>Hello World from Node 2</h3>"));
app.use("/", userRoutes);

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);
