const express = require('express');
const { cep } = require('./routes/cep');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (_req, res) => {
    res.status(200).json({ message: 'pong!' });
});

app.use('/cep', cep);

app.listen(PORT, () => {
    console.log(`Running at port ${PORT}`);
});