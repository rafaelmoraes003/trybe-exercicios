const validateWarranty = (err, req, res, next) => {
    const { infos: warrantyPeriod } = req.body;
    const periods = [1, 2, 3];

    if (!warrantyPeriod) {
        return res.status(400).json({ message: "O campo warrantyPeriod é obrigatório" })
    } else if (!periods.includes(warrantyPeriod)) {
        return res.status(400).json({ message: "O campo warrantyPeriod precisa estar entre 1 e 3" })
    }

    next();
}

module.exports = { validateWarranty };