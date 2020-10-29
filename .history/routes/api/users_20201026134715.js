const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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

    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const { name, email, password } = req.body;
        try {
            //See if user exist
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ errors: [{ msg: 'User already exist' }] });
            }
            // Get user gravatar
            const avatar = gravatar.url(email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            });

            // Init user
            user = new User({
                name,
                email,
                avatar,
                password
            })

            //Encrypt password
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save();
            // Return jsonwebtoken


            res.send('User registered');
            const payload = {
                user: {
                    id: user.id
                }
            }
        } catch (err) {
            console.error(err.message);
            return res.status(500).send('Server error');
        }

    })
module.exports = router;