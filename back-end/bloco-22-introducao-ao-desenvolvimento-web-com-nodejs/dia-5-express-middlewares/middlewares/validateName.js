const validateName = (req, res, next) => {
    const { productName } = req.body;

    if (!productName) {
        return res.status(400).json({ message: "O campo productName é obrigatório" });
    } else if (productName.length < 4) {
        return res.status(400).json({ message: "O campo productName deve ter pelo menos 4 caracteres" });
    }

    next();
}

module.exports = { validateName };