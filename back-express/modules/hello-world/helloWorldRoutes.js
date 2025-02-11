const express = require('express');
const router = express.Router();
const { helloWorld } = require('./helloworldController');

router.get('/', helloWorld);

module.exports = router;
