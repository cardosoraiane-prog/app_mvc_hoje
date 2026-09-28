const express = require("express");
const clienteController = require("../controllers/ clienteController");
const router = express.Router();


router.get('/cliente', clienteController.getAll);
router.post('/cliente',  clienteController.create);
router.delete('/cliente/:id', clienteController.delete);

module.exports = router;