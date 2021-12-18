const express = require('express')
const router = express.Router()

const produtosController = require('../api/controllers/produtos.controller');

router.get('/', produtosController.listarProdutos)

router.post('/add',produtosController.addProduto)

router.post('/edit',produtosController.editProduto)

router.get('/edit/:id',produtosController.editListProduto)

router.post('/delete',produtosController.deleteProduto)

module.exports = router;