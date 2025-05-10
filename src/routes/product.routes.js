const productController = require('../controllers/product.controller');

module.exports = (server) => {
    server.get("/produto", productController.getAll);
    server.get("/produto/:idProd", productController.getById);
    server.post("/produto", productController.create);
    server.put("/produto/:idProd", productController.update);
    server.del("/produto/:idProd", productController.remove);
};
