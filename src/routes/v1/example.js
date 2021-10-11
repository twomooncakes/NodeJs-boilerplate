const express = require('express');
const router = express.Router();

const mysql = require('mysql2/promise');
const dbConfig = require('../../dbConfig');

router.get('/', async (req, res) => {
    res.send('OK');
});

module.exports = router;