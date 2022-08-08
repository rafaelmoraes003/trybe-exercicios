const validateCep = (cep) => {
    const regex = /^\d{5}-?\d{3}$/;

    if (!cep || !regex.test(cep) || cep.length !== 9) {
        return false;
    }

    return true;
}

module.exports = { validateCep };