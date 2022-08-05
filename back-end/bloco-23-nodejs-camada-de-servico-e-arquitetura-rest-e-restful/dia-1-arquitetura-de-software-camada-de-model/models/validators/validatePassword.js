const validatePassword = (req, res, next) => {
    const { password } = req.body;

    if (password.length < 6 || typeof password !== 'string') {
        return res.status(400).json({
            message: 'Invalid password',
        });
    }

    next();
}

module.exports = { validatePassword };