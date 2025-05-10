const db = require('../db/db');

exports.findAll = () => {
    return db("cliente");
};

exports.findById = (id) => {
    return db("cliente").where("id", id).first();
};

exports.create = async (data) => {
    const [id] = await db("cliente").insert(data);
    return id;
};

exports.update = (id, data) => {
    return db("cliente").where("id", id).update(data);
};

exports.remove = (id) => {
    return db("cliente").where("id", id).delete();
};
