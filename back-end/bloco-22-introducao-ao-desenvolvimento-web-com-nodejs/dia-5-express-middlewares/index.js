const express = require('express');
const app = express();
const routePost = require('./sales');

app.use(express.json());

app.use('/sales', routePost);

app.listen(3001, () => {
    console.log('Listening at port 3001');
});