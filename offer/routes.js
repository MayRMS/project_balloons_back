const router = require('express').Router();
const { getAllOffers,
     newOffer,
     updateOffer,
     getOffersById,
     getOffersByUserId,
     apply,
     getOffersByCarerId
} = require('./controllers.js');

router.get('/', async (req, res) => {
    try {
        const offers = await getAllOffers();
        console.log(offers)
        res.json({ offers })
    } catch (e){
        console.log({e})
        res.status(500).json({msg: 'internal server error'})
    }
});
router.get('/:id', async (req, res) => {
    try {
        const { id } =  req.params;
        const offers = await getOffersById(id);
        res.json({ offers })
    } catch (e){
        console.log({e})
        res.status(500).json({msg: 'internal server error'})
    }
});
router.get('/user/:id', async (req, res) => {
    try {
        const { id } =  req.params;
        const offers = await getOffersByUserId(id);
        res.json({ offers })
    } catch (e){
        console.log({e})
        res.status(500).json({msg: 'internal server error'})
    }
});
router.get('/carer/:carerId', async (req, res) => {
    const { carerId } = req.params;
    try {
        const offers = await getOffersByCarerId(carerId)
        res.json(offers)
    } catch (e) {
        console.log({e})
        if (e.httpCode) return res.status(e.httpCode).json(e)
        res.status(500).json({msg: 'internal server error'})
    }
})
router.put('/:id/carer/:carerId', async (req, res) => {
    const { id, carerId } = req.params;
    try {
        const offer = await apply(id, carerId)
        res.json(offer)
    } catch (e) {
        console.log({e})
        if (e.httpCode) return res.status(e.httpCode).json(e)
        res.status(500).json({msg: 'internal server error'})
    }
})
router.post('/', async (req, res) => {
    const offer = req.body;
    if (!offer.title || !offer.specifications || !offer.user) {
        console.log(offer)
        return res.status(400).json({ message: 'bad request'})
    }
    try {
        const nOff = await newOffer(offer);
        res.json({ offer: nOff })
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