const express = require('express');
const { procurarPokemon } = require('../controllers/procurarPokemon');
const { listarPokemon } = require('../controllers/listarPokemon');
const rotas = express();

rotas.get(`/pokemon`, listarPokemon);
rotas.get(`/pokemon/:idOuNome`, procurarPokemon);


module.exports = {
    rotas
}