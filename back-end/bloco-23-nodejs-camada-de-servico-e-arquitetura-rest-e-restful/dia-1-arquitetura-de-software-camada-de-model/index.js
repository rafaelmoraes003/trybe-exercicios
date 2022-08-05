const express = require('express');
const { 
    getUsers, 
    getUserById, 
    createUser, 
    updateUser, 
    deleteUser 
} = require('./models/user');
const { validateFields } = require('./models/validators/validateFields');
const { validatePassword } = require('./models/validators/validatePassword');

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/user', getUsers);

app.get('/user/:id', getUserById);

app.delete('/user/:id', deleteUser);

app.use(validateFields, validatePassword);

app.post('/user', createUser);

app.put('/user/:id', updateUser);

app.listen(PORT, () => {
    console.log(`Running at port ${PORT}`);
});