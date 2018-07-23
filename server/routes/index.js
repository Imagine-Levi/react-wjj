const express = require('express');
const router = express.Router();

const MongoController = require('../controllers/list.controller');
const ListController = new MongoController();

router.get('/getList', (req, res) => {
  ListController.getList((data) => {
    res.json(data);
  });
});

module.exports = router;