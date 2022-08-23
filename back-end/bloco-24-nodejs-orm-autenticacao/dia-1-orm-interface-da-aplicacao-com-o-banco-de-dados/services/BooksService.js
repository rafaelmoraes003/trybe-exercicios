const { Book } = require('../models');

const getAll = async () => {
    const books = await Book.findAll();
    return { code: 200, data: books };
}

const getById = async (id) => {
    const book = await Book.findByPk(id);
    if (!book) return { code: 404, message: 'Book not found.' };
    return { code: 200, data: book.dataValues };
}

const createBook = async ({ title, author, pageQuantity }) => {
    await Book.create({ title, author, pageQuantity });
    return { code: 201, message: 'Book created!' };
};

const updateBook = async (id, { title, author, pageQuantity }) => {
    const [book] = await Book.update(
        { title, author, pageQuantity },
        { where: { id } },
    );

    if (!book) return { code: 404, message: 'Book not found!' };
    return { code: 200, message: 'Book updated!' };
}

const deleteBook = async (id) => {
    const deleteUser = await Book.destroy({ where: { id } });

    if (!deleteUser) return { code: 404, message: 'Book not found!' };
    return { code: 200, message: 'Book deleted!'};
}

module.exports = {
    getAll,
    getById,
    createBook,
    updateBook,
    deleteBook,
}