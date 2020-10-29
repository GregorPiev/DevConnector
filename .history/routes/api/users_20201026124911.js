const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../../models/User');


// @route  Get api/users
// @desc   Test route
// @route  Public

router.get('/', (req, res) => {
    res.send('User route')
})
router.post('/',
    [
        body('name', 'Name is required')
            .not()
            .isEmpty(),
        body('email', 'Please enter valid email').isEmail(),
        body('password', 'Please enter password with 6 or more characters').isLength({ min: 6 })
    ],

    (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        //See if user exist

        // Get user gravatar

        //Encrypt password

        // Return jsonwebtoken


        res.send('User route')

    })
module.exports = router;