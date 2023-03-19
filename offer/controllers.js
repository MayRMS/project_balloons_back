const OfferModel = require('./model');

const getAllOffers = async () => {
    const offers = await OfferModel.find();
    return offers.map(e => formatOffer(e));
};
const getOffersById = async (id) => {
    const offers = await OfferModel.find({_id: id})
    return offers.map(e => formatOffer(e));
}
const getOffersByUserId = async (id) => {
    const offers = await OfferModel.find({user: id})
    return offers.map(e => formatOffer(e));
}
const newOffer = async (data) => {
    const offer = await OfferModel.create(data);
    return formatOffer(offer);
};

const updateOffer = async (id, update) =>{
    const offer = await OfferModel.findOneAndUpdate({_id: id}, update, {new: true});
    return formatOffer(offer);
};

const apply = async (id, carerId) => {
    const offer = await OfferModel.findById(id);
    if (!offer || offer.registeredCarers.includes(carerId)) return null;

    const updOffer = await OfferModel.updateOne(
        { _id: id },
        { $push: { registeredCarers: carerId } },
        { returnDocument: 'after' }
    )
    return formatOffer(updOffer)
};

const getOffersByCarerId = async (carerId) => {
    const offers = await OfferModel.find({registeredCarers: carerId})
    return offers.map(e => formatOffer(e));
}


const formatOffer = (offer) => {
    const fmt = JSON.parse(JSON.stringify(offer));
    fmt.id = fmt._id;
    delete fmt._id;
    delete fmt.__v;
    delete fmt.createdAt;
    delete fmt.updatedAt;

    return fmt;
};

module.exports = {
    getAllOffers,
    newOffer,
    updateOffer,
    getOffersById,
    getOffersByUserId,
    apply,
    getOffersByCarerId
}