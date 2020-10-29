const express = require('express');
const router = express.Router();

// @route  Get posts
// @desc   Test route
// @route  Public

router.get('/', (req, res) => {
    res.send('Posts route')
})
module.exports = router;