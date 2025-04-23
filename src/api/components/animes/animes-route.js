const express = require('express');
const route = express.Router();
const animeController = require('./animes-controller');

module.exports = (app) => {
  app.use('/anime', route);

  //Menambahkan data anime ke database
  route.post('/', animeController.addAnime);

  //Mendapatkan anime full by id
  route.get('/:id/full', animeController.getFullAnime);

  //Mendapatkan anime by id ( not full )
  route.get('/:id', animeController.getAnimeById);

  //Mendapatkan karakter anime dari id anime
  route.get('/:id/characters', animeController.getCharactersByAnimeId);

  //Mengembalikan gambar anime (cover anime)
  route.get('/:id/pictures', animeController.getAnimePictures);

  //mendapatkan info anime (genre, studio, etc)
  route.get('/:id/moreinfo', animeController.getAnimeMoreInfo);

  //mendapatkan rekomendasi anime dari id anime
  route.get('/:id/recomendations', animeController.getAnimeRecomendations);

  //mendapatkan eksternal links anime dari anime id
  route.get('/:id/external', animeController.getExternalLinksByAnimeId);

  //mendapatkan info terkait platform anime streaming
  route.get('/:id/streaming', animeController.getAnimeStreaming);
};
