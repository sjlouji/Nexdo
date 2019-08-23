const express = require('express');
const app = express();
const {mongoose} = require('./db/mongoose');
const bodyparser = require('body-parser');
const List = require('./db/models/list_model');
const Task = require('./db/models/task_model');

app.use(bodyparser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/list',function(req,res){
    List.find({}).then((lists)=>{
        res.send(lists);
    });
});

app.post('/list',function(req,res){
    let title = req.body.title;
    let newlists = new List({
        title
    });
    newlists.save().then((listDoc)=>{
        res.send(listDoc);
    });
});

app.patch('/list/:id',function(req,res){
    List.findOneAndUpdate({
        _id: req.params.id
    },{
        $set: req.body
    }).then(()=>{
        res.sendStatus(200);
    });
});

app.delete('/list/:id',function(req,res){
    List.findOneAndRemove({
        _id: req.params.id
    }).then((removListDoc)=>{
        res.send(removListDoc);
    })
});

app.get('/list/:listId/tasks',function(req,res){
    Task.find({
        _listId: req.params.listId
    }).then((tasks)=>{
        res.send(tasks)
    })
});

app.post('/list/:listId/tasks',function(req,res){
   let newTask = new Task({
       title: req.body.title,
       _listId: req.params.listId
   });
   newTask.save().then((newTaskDoc)=>{
       res.send(newTaskDoc);
   });
});

app.patch('/list/:listId/tasks/:taskId',function(req,res){
    Task.findOneAndUpdate({
        _id: req.params.taskId,
        _listId: req.params.listId
    },{
        $set: req.body
    }).then(()=>{
        res.sendStatus(200);
    })
});

app.delete('/list/:listId/tasks/:taskId',function(req,res){
    Task.findOneAndRemove({
        _id: req.params.taskId,
        _listId: req.params.listId
    }).then((removeTaskDoc)=>{
        res.send(removeTaskDoc);
    })
});

app.listen(3000, function(){
    console.log('server is listning to port 3000');
});