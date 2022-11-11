
import express from 'express';
import { registerUser, verifyUser, loginUser, logoutUser, userDetails, all_User } from '../Controller/userContorller.js';
import { isAuthenticated } from '../Middleware/auth.js';

const router = express.Router();
 
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/verify').post(isAuthenticated, verifyUser);
router.route('/logout').get(isAuthenticated, logoutUser);
router.route("/me").get(isAuthenticated, userDetails);
router.route("/users").get(isAuthenticated, all_User);

export default router; 