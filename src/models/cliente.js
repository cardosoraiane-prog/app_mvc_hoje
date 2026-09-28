const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Cliente;