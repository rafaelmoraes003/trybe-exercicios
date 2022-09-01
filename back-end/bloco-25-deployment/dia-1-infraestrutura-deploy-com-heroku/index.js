const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    return res.json({
        message: 'some message...',
        port: PORT,
        prodVar: process.env.PROD_VAR,
        homologVar: process.env.HOMOLOG_VAR
    })
});

app.listen(PORT, () => console.log(`Running at port ${PORT}`));

