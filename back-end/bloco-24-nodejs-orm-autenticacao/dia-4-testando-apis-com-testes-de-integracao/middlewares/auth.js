const jwt = require('jsonwebtoken');

const JWT_SECRET = 'secretpass';

const auth = (req, res, next) => {
    try {
        const { authorization: token } = req.headers;

        if (!token) {
            return res.status(400).json({
                message: 'Token não encontrado ou informado',
            });
        }

        const { id: tokenId } = jwt.verify(token, JWT_SECRET);

        if (tokenId !== Number(req.params.id)) {
            return res.status(401).json({ message: 'Acesso negado' });
        }

        next();
    } catch (error) {
       return res.status(400).json({ message: error.message }); 
    }
};

module.exports = { auth };