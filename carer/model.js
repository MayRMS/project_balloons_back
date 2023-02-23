const mongoose = require('mongoose');

const carerSchema = new mongoose.Schema({
    name: String, 
    workArea: String,
    availability: String,
    type: String,
    fee: Number,
    recordChecked: Boolean,
    //photo: string
})


const CarerModel = mongoose.model("Carer", carerSchema);
module.exports = CarerModel;