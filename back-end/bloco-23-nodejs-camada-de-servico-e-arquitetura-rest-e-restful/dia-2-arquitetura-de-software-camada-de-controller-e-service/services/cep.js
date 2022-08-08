const cepModel = require('../models/cep');
const { validateCep } = require('./validators/validateCep');
const { validateCepInfos } = require('./validators/validateCepInfos');
const { validateResponse } = require('./validators/validateResponse');

const getCep = async (cep) => {
    const validate = validateCep(cep);
    if (!validate) {
        return {
            error: {
                code: 400,
                message: 'CEP inválido!',
            }
        };
    }

    const cepResponse = await cepModel.getCep(cep);
    return validateResponse(cepResponse);
}

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
    const validatecep = validateCep(cep);
    const validateInfos = validateCepInfos(logradouro, bairro, localidade, uf);
    
    if (!validatecep || !validateInfos) {
        return { error: { code: 400, message: 'Dados inválidos.' } };
    }

    const checkIfCepExists = await cepModel.getCep(cep);

    if (checkIfCepExists.length) {
        return { error: { code: 409, message: 'CEP já existente' } };
    }

    const response = await cepModel.createCep(cep, logradouro, bairro, localidade, uf);
    return { code: 201, data: response };
}

module.exports = { getCep, createCep };