const express = require('express');
const router = express.Router();
const List = require('../models/list.model');

function getAllMsg() {
    return new Promise((resolve, reject) => {
        List.find({}, (err, msgList) => {
            console.log(msgList)
            resolve(msgList);
        });
    });
}
router.get('/', (req, res) => {
    getAllMsg().then((data) => {
        res.send({
            msgList: data
        });
    });
});

module.exports = router;