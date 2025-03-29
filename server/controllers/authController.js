const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
const logger = require('../utils/logger')

const User = require('../models/userModel')

const registerUser = async (req, res) => {
    try {
        const { name, email, password, userType } = req.body;
        // Validate input
        if (!name || !email || !password || !userType) {
            return res.status(400).json({ message: 'Some fields is missing' });
        }
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        // Create new user
        const newUser = new User({ name, email, password: hashedPassword, userType: userType });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error('Error In Register User:', error.message);
        logger.error(path.join(__dirname), 'registerUser', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User Not Found' });
        }
        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });

        res.status(200).json({
             message: 'Login successful', 
             token, 
             user: {  
                id: user._id,
                username: user?.username,
                email: user?.email,
                role: user?.userType
             } 
        });
    } catch (error) {
        console.error('Error In Login User:', error.message);
        logger.error(path.join(__dirname), 'loginUser', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports = {
    registerUser,
    loginUser
}