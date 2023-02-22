const router = require('express').Router();

//desde aquí comprobamos que la petición sea correcta, llamamos al controller, y respondemos

// hay que listar a todos los trabajadores
router.get('/', (req, res) => {
    res.json({msg: "patatas"})
})

module.exports = router;