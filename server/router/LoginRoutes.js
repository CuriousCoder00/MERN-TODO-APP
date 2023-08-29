const express = require('express');
const { check, validationResult } = require('express-validator')
const router = express.Router();
const User = require('../schemas/UserSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

router.post('/register', [
    check('name', 'Name is required').not().isEmpty(),
    check('username', 'Please enter a username with 5 or more characters').isLength({min:5}),
    check('password', 'Please enter a password with 6 or more characters').isLength({min: 6}),
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {name, username, password} = req.body;
    try {
        // Check if user already exists
        let user = User.findOne(username);
        if(!user){
            return res.status(404).send("User Already Exists.");
        }
        user = new User({
            name,
            username,
            password
        });
        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        // Save user to database
        await user.save();
        // Return jsonwebtoken
        const payload = {
            user: {
                id: user.id
            }
        };
        jwt.sign(payload, 'SeCrET', {expiresIn: 360000}, (err, token) => {
            if(err) throw err;
            res.json({token});
        }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});



module.exports = router;