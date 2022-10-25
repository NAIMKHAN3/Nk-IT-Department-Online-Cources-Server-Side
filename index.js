const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors())
const Port = process.env.Port || 5000;


const courses = require("./courses.json");

app.get('/', (req, res) => {
    res.send('ami active achi')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(cs => cs.id == id)
    res.send(course);
})


app.listen(Port, () => {
    console.log('server is running', Port)
})