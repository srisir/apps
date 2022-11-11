
import jwt from 'jsonwebtoken';
import { User } from '../Schema/userSchema.js';

export const isAuthenticated = async (req, res, next) => {
    try { 
        const { token } = req.cookies
        if (!token) { return res.status(400).json({ success: true, message: 'Login First' }) }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const data = await User.findById(decodedToken._id);
        req.user = data;
        next();
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
        console.log(error.expiredAt);
    }
}