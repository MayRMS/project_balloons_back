const router = require('express').Router();
const carerRouter = require('./carer/routes.js')
const userRouter = require('./user/routes.js')

router.use('/carer', carerRouter);
router.use('/user', userRouter);

module.exports = router;