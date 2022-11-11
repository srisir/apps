
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
 
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: [true, "Please Enter Your Phone"], minLength: [10, "Phone should be 10 digits"], unique: true },
    email: { type: String, required: [true, "Please Enter Your Email"], unique: true },
    password: { type: String, required: true, minLength: [8, 'min length 8 character'], select: false },
    avatar: { public_id: { type: String }, url: { type: String } },
    role: { type: String, required: true, default: 'user' },
    createdAt: { type: Date, default: Date.now },
    otp: { type: Number },
    otp_expire: { type: Date },
    verified: { type: Boolean, default: false }
});
 

//hash password..................................
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(this.password, salt);
    this.password = passwordHash;
    next();
});

//compare password...................
userSchema.methods.comparePassword=async function (password){
    return bcrypt.compare(password, this.password);
}

//create token function.................................................
userSchema.methods.getJWTToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE * 24 * 60 * 60 * 1000
    });
    return token;
}


export const User = mongoose.model('User', userSchema);