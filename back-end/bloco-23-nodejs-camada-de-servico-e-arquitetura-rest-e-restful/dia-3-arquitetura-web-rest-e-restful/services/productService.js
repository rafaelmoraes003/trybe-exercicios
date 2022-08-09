const ProductModel = require('../models/productModel');

const getAll = async () => {
    const products = await ProductModel.getAll();
    return { code: 200, data: products };
}

const getById = async (id) => {
    const product = await ProductModel.getById(id);

    if (!product) {
        return { error: { code: 404, message: 'Not found.' } };
    }

    return { code: 200, data: product };
}

const add = async (name, brand) => {
    const product = await ProductModel.add(name, brand);

    return { code: 201, data: product };
}

const update = async (id, name, brand) => {
    const { error } = await getById(id);

    if (error) {
        return { error: { code: error.code, message: error.message } };
    }

    const product = await ProductModel.update(id, name, brand);
    
    return { code: 200, data: product };
}

const exclude = async (id) => {
    const product = await ProductModel.exclude(id);

    if (product !== undefined) {
        return { error: { code: 404, message: 'Not found.' } };
    }

    return { code: 200, message: 'Deleted Successfully' };
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    exclude,
}

