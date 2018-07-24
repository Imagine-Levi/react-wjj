const express = require('express');
const router = express.Router();

const ListController = require('../controllers/list.controller');

router.post('/getList', (req, res) => {
  ListController.getList(req.body, (data) => {
    res.json({
      status: 200,
      msg: 'success',
      data: data
    });
  });
});

module.exports = router;