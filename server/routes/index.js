const express = require('express');
const router = express.Router();

const ListController = require('../controllers/list.controller');

router.route('/getList').get(ListController.getList);

module.exports = router;