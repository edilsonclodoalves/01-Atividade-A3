const errors = require('restify-errors');
const productRepository = require('../repositories/product.repository');

exports.getAll = async (req, res) => {
    const products = await productRepository.findAll();
    res.send(products);
    return next();
};

exports.getById = async (req, res) => {
    const id = req.params.idProd;
    const product = await productRepository.findById(id);

    if (!product) return next(new errors.NotFoundError("Produto não encontrado"));

    res.send(product);
    return next();
};

exports.create = async (req, res) => {
    try {
        if (!req.body || !req.body.nome || !req.body.preco) {
            res.send(400, { error: "Nome e preço são obrigatórios" });
            return next();
        }

        const id = await productRepository.create(req.body);
        res.send(201, { id, message: "Produto criado com sucesso" });
        return next();
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            res.send(409, { error: "Produto já existe" });
        } else {
            res.send(500, { error: "Erro ao inserir o produto" });
        }
        return next();
    }
};

exports.update = async (req, res) => {
    const id = req.params.idProd;
    const updated = await productRepository.update(id, req.body);

    if (!updated) return next(new errors.NotFoundError("Produto não encontrado"));

    res.send({ success: true });
    return next();
};

exports.remove = async (req, res) => {
    const id = req.params.idProd;
    const deleted = await productRepository.remove(id);

    if (!deleted) return next(new errors.NotFoundError("Produto não encontrado"));

    res.send({ success: true });
    return next();
};
