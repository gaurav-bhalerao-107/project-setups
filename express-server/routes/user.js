const router = require('express').Router();
const UserController = require('../controllers/user')

router.get('/', UserController.getUserData_get)

module.exports = router;