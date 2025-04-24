const { Characters } = require('../../../models');

async function addCharactersToAnime(characterData) {
  return Characters.create(characterData);
}

async function getCharactersByAnimeId(animeId) {
  return Characters.find({ animeId });
}

async function getAllCharacters(page, limit) {
  return Characters.aggregate([
    { $match: {} },
    { $skip: (page - 1) * limit },
    { $limit: limit },
  ]);
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
  addCharactersToAnime,
  getCharactersByAnimeId,
  getAllCharacters,
  getCharacterById,
  deleteCharacter,
  getCharacterFullById,
};
