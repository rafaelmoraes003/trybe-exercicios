const booksService = require('../services/BooksService');

const serverErrorMessage = { code: 500, message: 'Something went wrong.' };

const getAll = async (_req, res, next) => {
    try {
        const { code, data } = await booksService.getAll();
        return res.status(code).json(data);
    } catch (error) {
        next(serverErrorMessage);
    }
}

const getById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const { code, message, data } = await booksService.getById(id);
        console.log({code, data});
        if (message) return res.status(code).json({ message });
        return res.status(code).json(data);
    } catch (error) {
        next(serverErrorMessage);
    }
}

const createBook = async (req, res, next) => {
    const { title, author, pageQuantity } = req.body;
    try {
        const { code, message } = await booksService.createBook({
            title,
            author,
            pageQuantity
        });
        return res.status(code).json({ message });
    } catch (error) {
        next(serverErrorMessage);
    }
}

const updateBook = async (req, res, next) => {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    
    try {
        const { code, message } = await booksService.updateBook(
            id,
            { title, author, pageQuantity }
        );
        return res.status(code).json({ message });
    } catch (error) {
        next(serverErrorMessage);
    }
}

const deleteBook = async (req, res, next) => {
    const { id } = req.params;

    try {
        const { code, message } = await booksService.deleteBook(id);
        return res.status(code).json({ message });
    } catch (error) {
        next(serverErrorMessage);
    }
}

module.exports = {
    getAll,
    getById,
    createBook,
    updateBook,
    deleteBook,
}