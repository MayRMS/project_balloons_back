const router = require('express').Router();
const carerRouter = require('./carer/routes.js')

router.use('/carer', carerRouter);

module.exports = router;