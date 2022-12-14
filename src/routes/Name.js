const express = require('express');
const router = express.Router();

const Name = require('./../models/Name')

//router.get("/list/:id", async function(req, res){
router.get("/list", async function(req, res){
    //var names = await Name.find({ id: req.body.id.toString() });
    //var names2 = Name.collection.$print
    //var names = await Name.find({ id: Math.floor(Math.random() * 5 )});
    //var names = await Name.find({ id: req.params.id });
    var names = await Name.find();
    res.json(names);
});

router.post("/add", async function(req, res){

    await Name.deleteOne({id: req.body.id});

    const newName = new Name({
        id: req.body.id,
        name: req.body.name,
    });
    await newName.save();

    const response = { message: "New Name Created!" + `id: ${req.body.id}`};
    res.json(response);
});

router.post("/delete", async function(req, res){

    await Name.deleteOne({id: req.body.id});
    const response = {message: "Name Deleted! " + `id: ${req.body.id}` };
    res.json(response);
}); 

module.exports = router;