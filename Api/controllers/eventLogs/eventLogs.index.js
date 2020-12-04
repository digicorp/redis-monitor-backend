const express = require('express')
let router = express.Router()
const eventLogController = require('./eventLogs.controller')  

router.post('/insert', eventLogController.Insert);
router.get('/list', eventLogController.list);

module.exports = router