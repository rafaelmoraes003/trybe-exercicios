const express = require('express');
const booksController = require('./controllers/BooksController');
const errorMiddleware = require('./middlewares/error');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/books', booksController.getAll);
app.get('/books/:id', booksController.getById);

app.post('/books', booksController.createBook);

app.put('/books/:id', booksController.updateBook);

app.delete('/books/:id', booksController.deleteBook);

app.use(errorMiddleware.error);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));