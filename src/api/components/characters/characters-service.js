const characterRepository = require('./character-repository');

async function createCharacter(characterData) {
  return characterRepository.createCharacter(characterData);
}

async function getCharactersByAnimeId(AnimeId) {
  return characterRepository.getCharactersByAnimeId(AnimeId);
}

async function getAllCharacters() {
  return characterRepository.getAllCharacters();
}

async function getCharacterById(id) {
  return characterRepository.getCharacterById(id);
}

async function deleteCharacter(id) {
  return characterRepository.deleteCharacter(id);
}

async function getCharacterFullById(AnimeId){
  return await characterRepository.getCharacterFullById(AnimeId);
}

module.exports = {
  createCharacter,
  getCharactersByAnimeId,
  getAllCharacters,
  getCharacterById,
  deleteCharacter,
  getCharacterFullById,
};
