const { Cliente } = require("../models");

//get all users
exports.getAll = async (req, res) => {
    const Clientes = await Cliente.findAll();
    res.json(Clientes);
}

//Post new user
exports.create = async (req, res) => {
    const { nome, email, senha } = req.body;
    const cliente = await Cliente.create({ nome, email, senha,cpf,idade,endereso,barrio,contato })
    res.json(user);
}

//delete user by id
exports.delete = async (req, res) => {
    const { id } = req.params;

    const cliente = await Cliente.findByPk(id);

    if (!cliente) {
        return res.status(404).json({ message: "Cliente não encontrado" })
    }

    await cliente.destroy();
    res.json({ message: "Cliente deletado com sucesso" });
}