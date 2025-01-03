const adminService = require('../services/adminServices');

const signUp = async (req, res) => {
    try {
        const admin = await adminService.signUp(req.body);
        res.status(201).json({ success: true, data: admin });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const response = await adminService.login(username, password);
        res.status(200).json({ success: true, message: response.message });
    } catch (error) {
        res.status(401).json({ success: false, message: error.message });
    }
};

module.exports = { signUp, login };
