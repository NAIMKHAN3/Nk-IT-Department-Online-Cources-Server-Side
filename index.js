const express = require("express");
const app = express();
const cors = require("cors");
const Port = process.env.Port || 5000;


const courses = require("./courses.json");

app.get('/', (req, res) => {
    res.send('ami active achi')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})


app.listen(Port, () => {
    console.log('server is running', Port)
})