const router = require('express').Router()
const socketController = require('../controllers/socket.controller')

module.exports = router

// router.get('/', linksController.readAll)
// router.get('/', linksController.readAsIs)
router.post('/', socketController.createSocket)