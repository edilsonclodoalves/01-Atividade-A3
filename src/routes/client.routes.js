const clientController = require('../controllers/client.controller');

module.exports = (server) => {
    server.get("/cliente", clientController.getAll);
    server.get("/cliente/:idProd", clientController.getById);
    server.post("/cliente", clientController.create);
    server.put("/cliente/:idProd", clientController.update);
    server.del("/cliente/:idProd", clientController.remove);
};
