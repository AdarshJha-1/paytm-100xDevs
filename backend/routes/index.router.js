const express = require('express');
const userRouter = require('./user.router.js')
const accountRouter = require('./account.router.js')

const router = express.Router();

router.use('/user', userRouter);
router.use('/account', accountRouter);

module.exports= router;