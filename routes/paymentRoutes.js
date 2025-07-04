const express = require("express");
const router = express.Router();
const { mpesaMiddleware } = require('../middlewares/mpesaMiddleware');
const { sendStkPush } = require('../controllers/mpesaControllers');

router.post('/stk', mpesaMiddleware, sendStkPush)

module.exports = router;