const validateCepInfos = (logradouro, bairro, localidade, uf) => {
    if (!logradouro || !bairro || !localidade || !uf) {
        return false;
    }
    return true;
}

module.exports = { validateCepInfos };