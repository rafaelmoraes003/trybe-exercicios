const cepService = require('../services/cep');

const getCep = async (req, res) => {
    const { cep } = req.params;
    const { error, code, data } = await cepService.getCep(cep);
    if (error) {
        return res.status(error.code).json({ message: error.message });
    }

    return res.status(code).json(data[0]);

}

const createCep = async (req, res) => {
    const { cep, logradouro, bairro, localidade, uf } = req.body;

    const { error, code, data } = await cepService.createCep(cep, logradouro, bairro, localidade, uf);

    if (error) {
        return res.status(error.code).json({ message: error.message });
    }

    return res.status(code).json(data);
}

module.exports = { getCep, createCep }