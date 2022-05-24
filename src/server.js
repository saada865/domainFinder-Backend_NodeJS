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

const mongoDbPath = "mongodb://saad:saad@cluster0-shard-00-00.zqtb3.mongodb.net:27017,cluster0-shard-00-01.zqtb3.mongodb.net:27017,cluster0-shard-00-02.zqtb3.mongodb.net:27017/?ssl=true&replicaSet=atlas-14jzfm-shard-0&authSource=admin&retryWrites=true&w=majority";
// "mongodb+srv://saad:saad@cluster0.zqtb3.mongodb.net/notesdb";
mongoose.connect(mongoDbPath).then(function()
    {
        app.get("/", function(req, res) {
            const response = {statuscode: res.statusCode ,message: "API WORKS !"};
            res.json(response);
            //res.send(str1);
        });

        router.get("/list", function(req, res){
            //var names = await Name.find({ id: req.params.id });
            var names = await Name.find({ id: Math.floor(Math.random() * 5 )});
            res.json(names);
        });
        
        const nameRouter =  require('./routes/Name');
        app.use("/names", nameRouter);
    });
// HomePage Route


const PORT = process.env.PORT || 5000; //5002;
app.listen(PORT, function(){
    console.log("Server started at port: " + PORT);
});