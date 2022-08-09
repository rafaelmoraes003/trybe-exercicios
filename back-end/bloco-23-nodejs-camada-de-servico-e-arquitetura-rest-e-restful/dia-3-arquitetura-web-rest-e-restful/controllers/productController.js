const { json } = require('express');
const express = require('express');
const ProductModel = require('../models/productModel');
const ProductService = require('../services/productService');

const router = express.Router();

router.get('/', async (_req, res) => {
    const { code, data } = await ProductService.getAll();

    return res.status(code).json(data);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const { error, code, data } = await ProductService.getById(id);

    if (error) {
        return res.status(error.code).json({ message: error.message });
    }

    return res.status(code).json(data);
});

router.post('/', async (req, res) => {
    const { name, brand } = req.body;

    if (!name || !brand) {
        return res.status(400).json({ message: 'Invalid data.' });
    }

    const { code, data } = await ProductService.add(name, brand);

    return res.status(code).json(data);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const { error, code, message } = await ProductService.exclude(id);

    if (error) {
        return res.status(error.code).json({ message: error.message });
    }

    return res.status(code).json({ message });
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, brand } = req.body;

    if (!name || !brand) {
        return res.status(400).json({ message: 'Invalid data.' });
    }

    const { error, code, data } = await ProductService.update(id, name, brand);

    if (error) {
        return res.status(error.code).json({ message: error.message });
    }

    return res.status(code).json(data);
});

module.exports = router;