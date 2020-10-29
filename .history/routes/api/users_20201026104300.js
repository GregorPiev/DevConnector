const express = require('express');
const router = express.Router();

// @route  Get api/users
// @desc   Test route
// @route  Public

router.get('/', (req, res) => {
    res.send('User route')
})
router.post('/', (req, res) => {
    console.log(req.body);
    res.json(req.body)
    res.send('User route')
})
module.exports = router;