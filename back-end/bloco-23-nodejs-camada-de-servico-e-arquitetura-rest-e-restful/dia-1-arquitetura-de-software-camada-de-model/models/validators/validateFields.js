const validateFields = (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName, !lastName, !email, !password) {
        return res.status(400).json({
            message: 'Invalid data.'
        });
    }

    next();
}

module.exports = { validateFields };
