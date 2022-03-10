const express = require('express')
const router = express.Router()

router.use('/api/v1/players', require('./player.routes'))

module.exports = router