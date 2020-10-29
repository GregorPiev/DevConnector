const express = require('express');
const router = express.Router();

// @route  Get api/users
// @desc   Test route
// @route  Public

router.get('/', (req, res) => {
    res.send('User route')
})
router.post('/', (req, res) => {
    res.json(req.body)
    console.log(req.body);
})
module.exports = router;