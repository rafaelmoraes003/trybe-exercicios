const error = async (err, _req, res, _next) => {
    const { code, message } = err;
    console.log(err);
    return res.status(code).json({ message });
}

module.exports = { error };