const router = require('express').Router();
const { getAll, signUp, logIn, update } = require('./controllers.js');

router.get('/', async (req, res) => {
    try {
        const users = await getAll();
        res.json({ users })
    } catch (e){
        console.log({e})
        res.status(500).json({msg: 'internal server error'})
    }
});

router.post('/', async (req, res) => {
    const user = req.body;
    if (!user.name || !user.email || !user.password) {
        return res.status(400).json({ message: 'bad request'})
    }
    try {
        const response = await signUp(user);
        res.json(response)
    } catch (err){
        console.log({err})
        if (err.httpCode) return res.status(err.httpCode).json(err)
        res.status(500).json({msg: 'internal server error'})
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await logIn(email, password);
        console.log(user)
        res.json(user)
    } catch (e){
        console.log({e})
        if (e.httpCode) return res.status(e.httpCode).json(e)
        res.status(500).json({msg: 'internal server error'})
    }
});

router.put('/:id', async (req, res) => {
    const upd = req.body;
    const { id } = req.params;
    try {
        const user = await update(id, upd);
        res.json(user)
    } catch (e){
        console.log({e})
        res.status(500).json({msg: 'internal server error'})
    }
}) 


module.exports = router;