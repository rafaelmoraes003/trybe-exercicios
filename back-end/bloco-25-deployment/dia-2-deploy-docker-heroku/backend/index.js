const express = require('express');

const app = express();
const port = process.env.PORT || 3000

app.use(cors());

app.get('/', (req, res) => {
    res.json({ ok: true });
});

app.listen(port, () => console.log(`Running at ${port}`));