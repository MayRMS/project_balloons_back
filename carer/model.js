const mongoose = require('mongoose');

const carerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    workArea: String,
    availability: String,
    type: String,
    fee: String,
    recordChecked: Boolean,
    photo: String
}, { timestamps: true })


const CarerModel = mongoose.model("Carer", carerSchema);
module.exports = CarerModel;