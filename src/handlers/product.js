const ProductModel = require('../models/product');
const statusCode = require('../utils/statuscode');

const getAll = async (request, h) => {
    const products = await ProductModel.find({});
    return products;
};

const save = async (req, h) => {
    const { name, price } = req.payload;

    const product = new ProductModel;
    product.name = name;
    product.price = price
    await product.save();

    const prod = {
        type: 'products',
        id: product.id,
        attributes: {
            name: product.name,
            price: product.price,
        },
        links: {
            self: `/api/v1/products/${product.id}`
        }
    };

    return h.response({ data: product }).code(statusCode.CREATED);
};

module.exports = {
    getAll,
    save
};