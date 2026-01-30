
const db = require("./db.js");

const Clientes = db.sequelize.define('clientes', {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false,
        unique: true // Garante que o e-mail seja único
    },
    senha: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
});

Clientes.sync({force: false});

module.exports = Clientes;