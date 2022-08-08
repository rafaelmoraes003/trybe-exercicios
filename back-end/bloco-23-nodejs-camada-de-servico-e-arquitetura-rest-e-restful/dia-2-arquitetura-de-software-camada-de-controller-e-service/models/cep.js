const connection = require('./connection');

const getCep = async (cep) => {
    const query = 'SELECT * FROM ceps WHERE cep = ?';
    const [ cepData ] = await connection.execute(query, [cep]);
    return cepData;
}

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
    const query = `INSERT INTO ceps (cep, logradouro, bairro, localidade, uf)
    VALUES (?, ?, ?, ?, ?)`;

    await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);

    return {
        cep,
        logradouro,
        bairro,
        localidade,
        uf
    };
}

module.exports = { getCep, createCep };