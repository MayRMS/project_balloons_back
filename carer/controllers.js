const CarerModel = require('./model.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const getAll = async () => {
    const carers = await CarerModel.find();
    return carers.map(e => formatCarer(e));
};

const signUp = async (data) => {
    data.password = encryptPass(data.password)
    const carer = await CarerModel.create(data);
    return {
        carer: formatCarer(carer),
        token: generateToken(formatCarer(carer))
    };
};
const findByIds = async (ids) => {
    const carers = await CarerModel.find({_id: ids})
    console.log(carers)
    return carers.map(e => formatCarer(e));
}
const logIn = async (email, password) =>{
    const carer = await CarerModel.findOne({ email });
    if (!bcrypt.compareSync(password, carer?.password || '')) throw customError('user not found', 404);
    return {
        carer: formatCarer(carer),
        token: generateToken(formatCarer(carer))
    };
};

const update = async (id, update) =>{
    if (update.password) update.password = encryptPass(update.password) 
    const carer = await CarerModel.findOneAndUpdate({_id: id}, update, {new: true});
    return {
        carer: formatCarer(carer),
        token: generateToken(formatCarer(carer))
    };
};
const formatCarer = (user) => {
    const fmt = JSON.parse(JSON.stringify(user));
    fmt.id = fmt._id;
    delete fmt._id;
    delete fmt.__v;
    delete fmt.password;
    delete fmt.createdAt;
    delete fmt.updatedAt;

    return fmt;
};
const customError = (message, httpCode) => ({
    message,
    httpCode
});
const encryptPass = (pass) => bcrypt.hashSync(pass, Number(process.env.ROUNDS));
const generateToken = (user) => jwt.sign({ user }, process.env.SECRET, { expiresIn: process.env.EXPIRES });

module.exports = {
    getAll,
    signUp,
    logIn,
    update,
    findByIds
}