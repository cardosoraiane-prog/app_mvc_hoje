import { Router } from 'express';
import clienteController from '../controllers/clienteController.js';

const router = Router();

// Definição das rotas do recurso "Cliente"
router.get('/', clienteController.listarTodos);
router.get('/:id', clienteController.buscarPorId);
router.post('/', clienteController.criar);
router.put('/:id', clienteController.atualizar);
router.delete('/:id', clienteController.deletar);

export default router;