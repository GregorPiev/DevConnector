const express = require('express');
const router = express.Router();

// @route  Get profile
// @desc   Test route
// @route  Public

router.get('/', (req, res) => {
    res.send('Profile route')
})
module.exports = router;