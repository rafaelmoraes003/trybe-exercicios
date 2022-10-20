import 'dotenv/config';
import app from './app';
import connectToDatabase from './models/Connection';

const PORT = process.env.PORT || 3333;

connectToDatabase();

app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));