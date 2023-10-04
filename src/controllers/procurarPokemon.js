const pokeDex = require("utils-playground");
const procurarPokemon = async (req, res) => {
  const { idOuNome } = req.params;

  pokeDex.detalharPokemon(idOuNome)
    .then(pokemon => {
      const status = {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        base_experience: pokemon.base_experience,
        forms: pokemon.forms,
        abilities: pokemon.abilities,
        species: pokemon.species
      }
      res.status(200).json(status);
    })
    .catch(erro => {
      res.status(404).json({ mensagem: 'Pokémon não encontrado.' });
    });
}

module.exports = {
    procurarPokemon
}
