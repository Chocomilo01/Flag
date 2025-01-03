const express = require('express');
const adminController = require('../controller/adminController');
const router = express.Router();

router.post('/signup', adminController.signUp);
router.post('/login', adminController.login);

module.exports = router;
