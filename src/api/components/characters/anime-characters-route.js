const express = require('express');

const route = express.Router({ mergeParams: true });
const characterController = require('./characters-controller');

module.exports = (app) => {
  app.use('/anime/:id/characters', route);

  // Create new character
  route.post('/', characterController.addCharactersToAnime);

  // Get anime characters
  route.get('/', characterController.getCharactersByAnimeId);

  // mendapatkan karakter full berdasarkan Id karakter dalam anime
  route.get('/:characterId/full', characterController.getCharacterFullById);
};
