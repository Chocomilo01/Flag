const Admin = require('../model/adminModel');
const bcrypt = require('bcrypt');

const signUp = async (data) => {
    const admin = new Admin(data);
    return await admin.save();
};

const login = async (username, password) => {
    const admin = await Admin.findOne({ username });
    if (!admin) {
        throw new Error('Invalid username or password');
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
        throw new Error('Invalid username or password');
    }

    return { message: 'Login successful' };
};

module.exports = { signUp, login };
