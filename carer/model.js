const { Schema } = require('mongoose');

const model = new Schema({
    name: String, 
    workArea: String,
    availability: String,
    type: String,
    fee: Number,
    recordChecked: Boolean,
    //photo: string
})



module.exports = model;