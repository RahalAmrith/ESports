const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const sports = require('../controllers/sport.controller');


// a simple test url to check that all of our files are communicating correctly.
router.post('/data', sports.search);

module.exports = router;