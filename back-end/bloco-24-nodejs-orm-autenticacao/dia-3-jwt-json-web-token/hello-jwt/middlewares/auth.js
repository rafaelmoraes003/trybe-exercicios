const jwt = require("jsonwebtoken");

const JWT_SECRET = 'supersecret';

const auth = (req, _res, next) => {
    const { authorization: token } = req.headers;

    if (!token) {
        next({ code: 401, message: "Token not found" });
    }

    try {
        const { authorization: token } = req.headers;
        const { username, admin } = jwt.verify(token, JWT_SECRET);
        req.infos = { username, admin }
        next();
    } catch (error) {
        next({ code: 401, message: error.message });
    }
};

module.exports = { auth };