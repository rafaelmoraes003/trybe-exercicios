const auth = (req, res, next) => {
    const { authorization: token } = req.headers;
    if (!token || token.length !== 16) {
        return res.status(401).json({ message: 'Token inválido!' });
    }

    next();
}

module.exports = { auth };