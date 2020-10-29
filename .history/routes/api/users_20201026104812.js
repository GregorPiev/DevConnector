const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check')


// @route  Get api/users
// @desc   Test route
// @route  Public

router.get('/', (req, res) => {
    res.send('User route')
})
router.post('/',
    [
        check('name', 'Name is required')
            .not()
            .isEmpty()
    ],

    (req, res) => {
        console.log(req.body);
        res.send('User route')
        // res.json(req.body)
    })
module.exports = router;