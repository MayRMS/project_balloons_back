const CarerModel = require('./model.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const getAll = async () => {
    const carers = await CarerModel.find();
    return carers;
};

const signUp = async (data) => {
    data.password = bcrypt.hashSync(data.password, Number(process.env.ROUNDS));
    const carer = await CarerModel.create(data);
    return {
        carer,
        token: generateToken(carer)
    };
};

const logIn = async (email, password) =>{
    const carer = await CarerModel.findOne({ email });
    if (!bcrypt.compareSync(password, carer?.password)) throw customError('user not found', 404)
    return {
        carer,
        token: generateToken(carer)
    };
};

const customError = (message, httpCode) => ({
    message,
    httpCode
})

const generateToken = (user) => {
    return jwt.sign({ user }, process.env.SECRET, { expiresIn: process.env.EXPIRES })
} 

module.exports = {
    getAll,
    signUp,
    logIn
}