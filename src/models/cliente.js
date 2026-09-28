import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; // Ajuste o caminho de conexão com o banco se necessário

const Cliente = sequelize.define('Cliente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: { msg: 'O campo nome não pode estar vazio.' }
    }
  },
  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: { msg: 'Forneça um e-mail válido.' }
    }
  },
  cpf: {
    type: DataTypes.STRING(14),
    allowNull: true,
    unique: true
  },
  telefone: {
    type: DataTypes.STRING(20),
    allowNull: true
  }
}, {
  tableName: 'clientes',
  timestamps: true // Cria automaticamente os campos createdAt e updatedAt
});

export default Cliente;