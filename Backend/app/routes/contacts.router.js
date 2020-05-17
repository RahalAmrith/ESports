const express = require('express');
const router = express.Router();

const Contacts = require('../controllers/Contacts.controller');

router.post('/add', Contacts.add);

module.exports =  router;
