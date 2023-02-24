const UserModel = require('./model.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const getAll = async () => {
    const users = await UserModel.find();
    return users.map(e => formatUser(e));
};

const signUp = async (data) => {
    data.password = encryptPass(data.password)
    const user = await UserModel.create(data);
    return {
        user: formatUser(user),
        token: generateToken(formatUser(user))
    };
};

const logIn = async (email, password) =>{
    const user = await UserModel.findOne({ email });
    if (!bcrypt.compareSync(password, user?.password || '')) throw customError('user not found', 404);
    return {
        user: formatUser(user),
        token: generateToken(formatUser(user))
    };
};

const update = async (id, update) =>{
    if (update.password) update.password = encryptPass(update.password) 
    const user = await UserModel.findOneAndUpdate({_id: id}, update, {new: true});
    return {
        user: formatUser(user),
        token: generateToken(formatUser(user))
    };
};

const formatUser = (user) => {
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
    update
}