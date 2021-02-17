const ProductModel = require('../models/product');
const statusCode = require('../utils/statuscode');

const transformer = product => ({
    type: 'products',
    id: product.id,
    attributes: {
        name: product.name,
        price: product.price,
    },
    links: {
        self: `/api/v1/products/${product.id}`
    }
});


const getAll = async (request, h) => {
    const products = await ProductModel.find({});
    return products.map(transformer);
};

const save = async (req, h) => {
    const { name, price } = req.payload;

    const product = new ProductModel;
    product.name = name;
    product.price = price
    await product.save();

    return h.response(transformer(product)).code(statusCode.CREATED);
};

module.exports = {
    getAll,
    save
};