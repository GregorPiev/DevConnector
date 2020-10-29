const express = require('express');
const router = express.Router();

// @route  Get api/users
// @desc   Test route
// @route  Public

router.get('/', (req, res) => {
    res.send('User route')
})