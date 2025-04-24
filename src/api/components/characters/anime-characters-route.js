const express = require('express');

const route = express.Router({ mergeParams: true });
const characterController = require('./characters-controller');

module.exports = (app) => {
  app.use('/anime/:id/characters', route);

  // Add character to anime
  route.post('/', characterController.createCharacter);

  // Get anime characters
  route.get('/', characterController.getCharactersByAnimeId);

  // mendapatkan karakter full berdasarkan Id karakter dalam anime
  route.get('/:characterId/full', characterController.getCharacterFullById);
};
