const router = require('express').Router();
const { getAllOffers, newOffer, updateOffer} = require('./controllers.js');

router.get('/', async (req, res) => {
    try {
        const offers = await getAllOffers();
        res.json({ offers })
    } catch (e){
        console.log({e})
        res.status(500).json({msg: 'internal server error'})
    }
});

//get de solo activas

router.post('/', async (req, res) => {
    const offer = req.body;
    if (!offer.title || !offer.specifications || !offer.user) {
        return res.status(400).json({ message: 'bad request'})
    }
    try {
        const offer = await newOffer(offer);
        res.json({ offer })
    } catch (err){
        console.log({err})
        if (err.httpCode) return res.status(err.httpCode).json(err)
        res.status(500).json({msg: 'internal server error'})
    }
});

router.put('/:id', async (req, res) => {
    const upd = req.body;
    const { id } = req.params;
    try {
        const offer = await updateOffer(id, upd);
        res.json({offer})
    } catch (e){
        console.log({e})
        res.status(500).json({msg: 'internal server error'})
    }
})







module.exports = router;