const jwt = require("jsonwebtoken");

const JWT_SECRET = 'supersecret';

const admin = (req, _res, next) => {
    const { authorization: token } = req.headers;

    const { admin } = jwt.verify(token, JWT_SECRET);

    if (!admin) {
        next({ code: 403, message: "Restricted access" });
    }

    next();
};

module.exports = { admin };