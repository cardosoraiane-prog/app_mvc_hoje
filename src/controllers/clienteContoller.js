const Cliente = require('../models/cliente');

const clienteController = {
  // GET /clientes
  async listarTodos(req, res) {
    try {
      const clientes = await Cliente.findAll();
      return res.status(200).json(clientes);
    } catch (error) {
      return res.status(500).json({ mensagem: 'Erro ao buscar clientes.', erro: error.message });
    }
  },

  // GET /clientes/:id
  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const cliente = await Cliente.findByPk(id);

      if (!cliente) {
        return res.status(404).json({ mensagem: 'Cliente não encontrado.' });
      }

      return res.status(200).json(cliente);
    } catch (error) {
      return res.status(500).json({ mensagem: 'Erro ao buscar cliente.', erro: error.message });
    }
  },

  // POST /clientes
  async criar(req, res) {
    try {
      const { nome, email, cpf, telefone } = req.body;
      const novoCliente = await Cliente.create({ nome, email, cpf, telefone });

      return res.status(201).json(novoCliente);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({ mensagem: 'E-mail ou CPF já cadastrado.' });
      }
      return res.status(400).json({ mensagem: 'Erro ao criar cliente.', erro: error.message });
    }
  },

  // PUT /clientes/:id
  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, cpf, telefone } = req.body;

      const cliente = await Cliente.findByPk(id);

      if (!cliente) {
        return res.status(404).json({ mensagem: 'Cliente não encontrado.' });
      }

      await cliente.update({ nome, email, cpf, telefone });

      return res.status(200).json(cliente);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({ mensagem: 'E-mail ou CPF já cadastrado por outro cliente.' });
      }
      return res.status(400).json({ mensagem: 'Erro ao atualizar cliente.', erro: error.message });
    }
  },

  // DELETE /clientes/:id
  async deletar(req, res) {
    try {
      const { id } = req.params;
      const cliente = await Cliente.findByPk(id);

      if (!cliente) {
        return res.status(404).json({ mensagem: 'Cliente não encontrado.' });
      }

      await cliente.destroy();

      return res.status(200).json({ mensagem: 'Cliente removido com sucesso.' });
    } catch (error) {
      return res.status(500).json({ mensagem: 'Erro ao deletar cliente.', erro: error.message });
    }
  }
};

module.exports = clienteController;