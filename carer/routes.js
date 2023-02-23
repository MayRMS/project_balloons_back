const router = require('express').Router();
const { getAll } = require('./controllers')

//desde aquí comprobamos que la petición sea correcta, llamamos al controller, y respondemos

// hay que listar a todos los trabajadores
router.get('/', async (req, res) => {
    try {
        const carers = await getAll();
        res.json({ carers })
    } catch (e){
        console.log({e})
        res.status(500).json({msg: 'internal server error'})
    }
})

module.exports = router;