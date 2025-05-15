const errors = require('restify-errors');
const clientRepository = require('../repositories/client.repository');


function formatarCPF(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

exports.getAll = async (req, res) => {
    const clients = await clientRepository.findAll();

    // Para cada cliente, formata o CPF
    const clientsFormatados = clients.map(client => ({
        ...client,
        cpf: formatarCPF(client.cpf)
    }));

    res.send(clientsFormatados);
    return;
};

exports.getById = async (req, res) => {
    const id = req.params.idProd;
    const client = await clientRepository.findById(id);

    if (!client) return next(new errors.NotFoundError("Cliente não encontrado"));


    client.cpf = formatarCPF(client.cpf);
    res.send(client);
    return;
};

exports.create = async (req, res) => {
    try {
        if (!req.body || !req.body.nome || !req.body.cpf) {
            res.send(400, { error: "Nome e CPF são obrigatórios" });
            return ;
        }

        const id = await clientRepository.create(req.body);
        res.send(201, { id, message: "Cliente criado com sucesso" });
        return ;
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            res.send(409, { error: "Cliente já existe" });
        } else {
            res.send(500, { error: "Erro ao inserir o client" });
        }
        return;
    }
};

exports.update = async (req, res) => {
    const id = req.params.idProd;
    const updated = await clientRepository.update(id, req.body);

    if (!updated) return next(new errors.NotFoundError("Cliente não encontrado"));

    res.send({ success: true });
    return;
};

exports.remove = async (req, res) => {
    const id = req.params.idProd;
    const deleted = await clientRepository.remove(id);

    if (!deleted) return next(new errors.NotFoundError("Cliente não encontrado"));

    res.send({ success: true });
    return;
};
