const pokeDex = require("utils-playground");

const listarPokemon = async (req, res) => {
  const { page } = req.query;
  const pokemon = pokeDex.listarPokemons(page ? page : 1);

  pokemon
    .then(pokemonData => {
      res.status(200).json(pokemonData);
    })
    .catch(erro => {

      res.status(400).json(`BugDex`);
    });
};

module.exports = {
    listarPokemon
};
