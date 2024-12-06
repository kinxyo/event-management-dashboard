import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


// Function to generate JWT token
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: '30d',  // Token valid for 30 days
    });
}

const register = async (req, res) => {
    const { username, email, password } = req.body

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({ username, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ success: true, message: "User created successfully" });
    } catch (error) {
        res.status(500).json({success: false, message: "Error in Register side backend "+error})
    }
}

const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = generateToken(user._id);

        res.status(201).json({ success: true, token, user, message: "Login successfully" });
    } catch (error) {
        res.status(500).json({success: false, message: "Error in Login side backend "+error})
    }
}

export default { register, login }