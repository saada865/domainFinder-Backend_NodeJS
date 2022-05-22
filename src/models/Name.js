// Steps:
// 1. Define Schema -> name
// 2. Create Mode -> <model name> <schema> Names

const mongoose = require('mongoose');

const nameSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String, 
        unique: true, 
        required: true,
    },

});

module.exports = mongoose.model("Name", nameSchema);