const express = require('express');
const router = express.Router();

// @route  Get auth
// @desc   Test route
// @route  Public

router.get('/', (req, res) => {
    res.send('Auth route')
})
module.exports = router;