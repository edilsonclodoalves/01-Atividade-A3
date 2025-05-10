const db = require('../db/db');

exports.findAll = () => {
    return db("produto");
};

exports.findById = (id) => {
    return db("produto").where("id", id).first();
};

exports.create = async (data) => {
    const [id] = await db("produto").insert(data);
    return id;
};

exports.update = (id, data) => {
    return db("produto").where("id", id).update(data);
};

exports.remove = (id) => {
    return db("produto").where("id", id).delete();
};
