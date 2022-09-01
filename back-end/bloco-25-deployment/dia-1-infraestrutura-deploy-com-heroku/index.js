const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    return res.json({ message: 'some message...' })
});

app.listen(PORT, () => console.log(`Running at port ${PORT}`));

