const express = require('express');
const db = require('../data/db')
const router = express.Router();

router.get('/', (req, res) => {
    db('actions').then(action => {
        res.status(200).json(action);
    })
})

module.exports = router;