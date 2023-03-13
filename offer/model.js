const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    specifications: {
        type: String,
        required: true,
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    active: {
        type: Boolean,
        default: true
    },
    workArea: String,
    availability: String,
    type: String,
    feeOffered: String,
}, { timestamps: true })


const OfferModel = mongoose.model("Offer", offerSchema);
module.exports = OfferModel;