const Book = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pageQuantity: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    }, {
        tableName: 'books',
    });

    return Book;
}

module.exports = Book;