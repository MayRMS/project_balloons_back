const router = require('express').Router();
const carerRouter = require('./carer/routes.js')
const userRouter = require('./user/routes.js')
const offerRouter = require('./offer/routes.js')

router.use('/carer', carerRouter);
router.use('/user', userRouter);
router.use('/offer', offerRouter);


module.exports = router;