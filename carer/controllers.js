const CarerModel = require('./model.js')

const getAll = async () => {
    const carers = await CarerModel.find();
    return carers;
}





module.exports = {
    getAll
}