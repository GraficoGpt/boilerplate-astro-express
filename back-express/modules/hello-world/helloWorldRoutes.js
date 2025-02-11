const express = require('express');
const router = express.Router();
const { helloWorld } = require('./helloWorldController');

router.get('/', helloWorld);

module.exports = router;
