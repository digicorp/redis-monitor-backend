const express = require('express')
let router = express.Router()
const InfoController = require('./info.controller')  

router.get('/redis-info', InfoController.redisInfo);

module.exports = router