const { Characters } = require('../../../models');

async function getCharactersByAnimeId(animeId) {
  return Characters.find({ animeId });
}

async function getAllCharacters() {
  return Characters.find({});
}

async function getCharacterById(id) {
  return Characters.findById(id);
}

async function deleteCharacter(id) {
  return Characters.findByIdAndDelete(id);
}

async function getCharacterFullById(characterId) {
  return Characters.findById(characterId); 
}

module.exports = {
  getCharactersByAnimeId,
  getAllCharacters,
  getCharacterById,
  deleteCharacter,
  getCharacterFullById,
};
