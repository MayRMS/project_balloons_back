const router = require('express').Router();
const { auth } = require('../middleware/auth');
const { getAll, signUp, logIn, update, findByIds } = require('./controllers');


router.get('/', auth, async (req, res) => {
    try {
        const carers = await getAll();
        res.json({ carers })
    } catch (e){
        console.log({e})
        res.status(500).json({msg: 'internal server error'})
    }
});
router.get('/registered', auth, async (req, res) => {
    try {
        const ids = req.query?.ids?.split(',')
        const carers = await findByIds(ids)
        res.json({ carers })
    } catch (e) {
        console.log({e})
        res.status(500).json({msg: 'internal server error'})
    }
})
router.post('/', async (req, res) => {
    const carer = req.body;
    if (!carer.name || !carer.email || !carer.password) {
        return res.status(400).json({ message: 'bad request'})
    }
    try {
        const response = await signUp(carer);
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
        const carer = await logIn(email, password);
        res.json(carer)
    } catch (e){
        console.log({e})
        if (e.httpCode) return res.status(e.httpCode).json(e)
        res.status(500).json({msg: 'internal server error'})
    }
});

router.put('/:id', auth, async (req, res) => {
    const upd = req.body;
    const { id } = req.params;
    try {
        const carer = await update(id, upd);
        res.json(carer)
    } catch (e){
        console.log({e})
        res.status(500).json({msg: 'internal server error'})
    }
}) 


module.exports = router;