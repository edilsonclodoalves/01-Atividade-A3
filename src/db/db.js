const knex = require('knex');

const conn = knex({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'Mysql123',
        database: 'loja'
    }
});

module.exports = conn;