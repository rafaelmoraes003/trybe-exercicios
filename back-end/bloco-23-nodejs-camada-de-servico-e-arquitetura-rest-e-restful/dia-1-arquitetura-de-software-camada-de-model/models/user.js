const connection = require('./connection');

const validateUser = async (id) => {
    const query = `SELECT id, first_name, last_name, email 
    FROM user_info
    WHERE id = ?`;
    const [ user ] = await connection.execute(query, [Number(id)]);
    return user;
}

const getUsers = async (_req, res) => {
    const query = 'SELECT id, first_name, last_name, email FROM user_info';
    const [ users ] = await connection.execute(query);

    return res.status(200).json(users);
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await validateUser(id);

    if (user.length === 0 ) {
        return res.status(404).json({
            message: 'User not Found.'
        });
    }

    return res.status(200).json(user);
}

const createUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const query = `INSERT INTO user_info
    (first_name, last_name, email, password) VALUES (?, ?, ?, ?)`;

    const [{ insertId }] = await connection
    .execute(query, [firstName, lastName, email, password]);

    res.status(201).json({
        id: insertId,
        firstName,
        lastName,
        email,
    });  
}

const updateUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const { id } = req.params;

    const user = await validateUser(id);
    if (user.length === 0) return res.status(404).json({
        message: 'User not found.',
    });

    const query = `UPDATE user_info
    SET first_name = ?, last_name = ?, email = ?, password = ?
    WHERE id = ?`;

    await connection.execute(query, [firstName, lastName, email, password, Number(id)]);
    return res.status(200).json({ id, firstName, lastName, email, password });
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await validateUser(id);

    if (user.length === 0) return res.status(404).json({
        message: 'User not found.',
    });

    const query = 'DELETE FROM user_info WHERE id = ?';
    await connection.execute(query, [Number(id)]);
    return res.status(200).end();
}

module.exports = {  getUsers, getUserById, createUser, updateUser, deleteUser };