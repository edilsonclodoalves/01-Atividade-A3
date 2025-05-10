const restify = require('restify');
const productRoutes = require('./routes/product.routes');
const clientRoutes = require('./routes/client.routes');

// Cria o servidor
const server = restify.createServer({
    name: 'Lojinha',
    version: '1.0.0'
});

// Middlewares
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

// Rotas
productRoutes(server);
clientRoutes(server);

// Endpoint raiz
server.get("/", (req, res, next) => {
    res.send({ resposta: "Sejam bem-vindos à nossa Lojinha" });
    return next();
});

// Inicia o servidor
server.listen(8001, () => {
    console.log("%s executando em: %s", server.name, server.url);
});
