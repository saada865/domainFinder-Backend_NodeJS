const express = require('express');
const router = express.Router();

const Name = require('./../models/Name')

// router.post("/list",  function(req, res){
//     var names =  Name.find({ id: req.body.id });
//     //var names = await Name.find({ id: Math.floor(Math.random() * 5 )});
//     res.json(names);
// });

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