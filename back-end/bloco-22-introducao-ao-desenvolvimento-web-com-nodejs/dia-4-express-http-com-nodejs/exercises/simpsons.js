const express = require('express');
const fs = require('fs').promises;

const app = express();
app.use(express.json());

const file = './simpsons.json';

const readSimpsonsFile = async () => {
    try {
        const read = await fs.readFile(file);
        const parsedFile = JSON.parse(read);
        return parsedFile;
    } catch (error) {
        return error;
    }
}

const writeSimpsonsFile = async (fileName, fileContent) => {
    try {
        await fs.writeFile(fileName, JSON.stringify(fileContent));
    } catch (error) {
        return error;
    }
}

app.get('/readSimpsons', async (req, res) => {
    const read = await fs.readFile(file);
    if (!read) return res.status(501).json({ message: 'Internal Server Error' });
    res.status(200).json({ message: 'ok' });
});

app.get('/simpsons', async (_req, res) => {
    try {
        const readFile = await readSimpsonsFile();
        res.status(200).json(readFile);
    } catch (error) {
        res.status(404).end();
    }
});

app.get('/simpsons/:id', async  (req, res) => {
    const { id } = req.params;
    const simpsons = await readSimpsonsFile();
    const findSimpson = simpsons.find((s) => s.id === id);
    if (!findSimpson) return res.status(400).json({ message: 'simpson not found' });
    res.status(200).json(findSimpson);
});

app.post('/simpsons', async (req, res) => {
    const { id, name } = req.body;
    const simpsons = await readSimpsonsFile();
    const doesExists = simpsons.find((s) => s.id === id);
    if (doesExists) return res.status(409).json({ message: 'id already exists' });
    simpsons.push({ id, name });
    await writeSimpsonsFile(file, simpsons);
    res.status(204).end();
});

app.listen(3002, () => {
    console.log("Listening at port 3002");
});