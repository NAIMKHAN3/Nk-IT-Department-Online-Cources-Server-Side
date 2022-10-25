const express = require("express");
const app = express();
const cors = require("cors");
const Port = process.env.Port || 5000;

app.get('/', (req, res) => {
    res.send('ami active achi')
})


app.listen(Port, () => {
    console.log('server is running', Port)
})