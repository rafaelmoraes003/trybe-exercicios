const validateInfos = (req, res, next) => {
    const { infos } = req.body;
    const keys = Object.keys(infos);

    if (!infos) {
        return res.status(400).json({ message: "O campo infos é obrigatório" })
    } else if (
        keys.length !== 2
        || keys[0] !== 'saleDate'
        || keys[1] !== 'warrantyPeriod'
    ) {
        return res.status(400).json({ message: "Dados inválidos" });
    }

    next();
}

module.exports = { validateInfos };