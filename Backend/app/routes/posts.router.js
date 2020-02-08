const express = require('express');
const router = express.Router();

const Posts = require('../controllers/posts.controller');

router.post('/list', Posts.list);
router.post('/get', Posts.getPost)
router.post('/add', Posts.addPost)

module.exports =  router;
