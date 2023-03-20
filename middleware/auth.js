
const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    const t = req.headers?.authorization
    const token = jwt.decode(t, process.env.SECRET);
    if (!t || ! token) return res.status(401).json({message: 'unauthorized', status: 401});
    req.user = token;
    next()  
}

module.exports = {
    auth
}