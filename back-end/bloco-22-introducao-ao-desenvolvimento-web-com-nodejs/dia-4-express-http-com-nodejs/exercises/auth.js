const express = require('express');
const crypto = require('crypto');

const app = express();
app.use(express.json());

const generateToken = () => {
    const token = crypto.randomBytes(8).toString('hex');
    return token;
}

const auth = (req, res, next) => {
    const { authorization } = req.headers;

    try {
        if (!authorization || authorization.length !== 16) {
            return res.status(401).json({ message: 'Token inválido!' });
        }

        return next();
    } catch (error) {
        return res.status(500).end();
    }
}

app.use(auth);

app.post('/signup', (req, res) => {
    const { email, password, firstname, phone } = req.body;
    if (!email || !password || !firstname || !phone) {
        return res.status(401).json({ message: 'missing fields' });
    }

    const token = generateToken();

    res.status(200).json({ token });
});

app.listen(3003, () => {
    console.log("Listening at port 3003");
});