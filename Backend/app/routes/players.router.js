const express = require('express');
const router = express.Router();

const players = require('../controllers/players.controller');

router.post('/add', players.add);
router.post('/list', players.list);

module.exports =  router;