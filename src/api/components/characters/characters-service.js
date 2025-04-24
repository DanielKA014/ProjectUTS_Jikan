const characterRepository = require('./character-repository');

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

async function getCharacterFullById(characterId){
  return await characterRepository.getCharacterFullById(characterId);
}

module.exports = {
  getCharactersByAnimeId,
  getAllCharacters,
  getCharacterById,
  deleteCharacter,
  getCharacterFullById,
};
