const express = require('express');
const router = express.Router();

const ListController = require('../controllers/list.controller');
const UserController = require('../controllers/user.controller');

router.post('/getList', (req, res) => {
  ListController.getList(req.body, (data) => {
    res.json({
      status: 200,
      msg: 'success',
      data: data
    });
  });
});

router.post('/login', (req, res) => {
  UserController.login(req.body, (data) => {
    res.json({
      status: 200,
      msg: 'success',
      data: data
    });
  });
});

module.exports = router;