const characterRepository = require('./character-repository');

async function addCharactersToAnime(characterData) {
  return await characterRepository.addCharactersToAnime(characterData);
}

async function getCharactersByAnimeId(AnimeId) {
  return characterRepository.getCharactersByAnimeId(AnimeId);
}

async function getAllCharacters(page, limit) {
  return characterRepository.getAllCharacters(page, limit);
}

async function getCharacterById(id) {
  return characterRepository.getCharacterById(id);
}

async function deleteCharacter(id) {
  return characterRepository.deleteCharacter(id);
}

async function getCharacterFullById(characterId, animeId) {
  return await characterRepository.getCharacterFullById(characterId, animeId);
}
module.exports = {
  addCharactersToAnime,
  getCharactersByAnimeId,
  getAllCharacters,
  getCharacterById,
  deleteCharacter,
  getCharacterFullById,
};
