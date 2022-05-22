// worked on 5/2/22
const express = require('express');
//const bibleMaleNames = require('bible-male-names');
const app = express();

const mongoose = require('mongoose');
const Name = require('./models/Name');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//str1 = bibleMaleNames.random();


mongoose.connect("mongodb+srv://saad:saad@cluster0.zqtb3.mongodb.net/notesdb").then(function()
    {
        app.get("/", function(req, res) {
            const response = {message: "API WORKS !"};
            res.json(response);
            //res.send(str1);
        });
        
        app.get("/names/list", async function(req, res){
            //var names = await Name.find({ id: req.params.id });
            var names = await Name.find({ id: Math.floor(Math.random() * 4 )});
            res.json(names);
        });

        app.post("/names/add", async function(req, res){
        
            await Name.deleteOne({id: req.body.id});

            const newName = new Name({
                id: req.body.id,
                name: req.body.name,
            });
            await newName.save();

            const response = { message: "New Name Created!" + `id: ${req.body.id}`};
            res.json(response);
        });

        app.post("/names/delete", async function(req, res){

            await Name.deleteOne({id: req.body.id});
            const response = {message: "Name Deleted! " + `id: ${req.body.id}` };
            res.json(response);
        }); 
    });
// HomePage Route


app.listen(5002, function(){
    console.log("Server started at port: 5002");
});