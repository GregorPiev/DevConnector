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
            .isEmpty(),
        check('email', 'Please enter valid email').isEmail(),
        check('password', 'Please enter password with 6 or more characters').isLength({ min: 6 })
    ],

    (req, res) => {
        const errors = validationResult.isEmpty(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

    })
module.exports = router;