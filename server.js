var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/build'));
app.get('/api/tasks',function (req, res) {
    res.send([
        {task: 'ToDo 01 task', done: false, edit:false, date: new Date()},
        {task: 'ToDo 02 task', done: false, edit:false, date: new Date()},
        {task: 'ToDo 03 task', done: false, edit:false, date: new Date()},
        {task: 'ToDo 04 task', done: false, edit:false, date: new Date()}
    ]);
})
var port = process.env.PORT || 3000;
app.listen(port);
console.log('app started at: ' + port);