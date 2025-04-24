const { Animes } = require('../../../models');
const { getEpisodesByAnimeId } = require('./../episodes/episodes-repository');
const { getAnimeThemes } = require('./../themes/themes-repository');

async function addAnime(animeData) {
  return Animes.create(animeData);
}

async function findById(id) {
  const animes = await Animes.findById(id);
  const episodes = await getEpisodesByAnimeId(id);
  const themes = await getAnimeThemes(id);
  console.log(themes);
  return { animes, episodes, themes };
}

async function getAnimes(page, limit) {
  // fungsi pagination menggunakan aggregate mongodb
  return Animes.aggregate([
    { $match: {} },
    { $skip: (page - 1) * limit },
    { $limit: limit },
    {
      $project: {
        // gunakan project untuk SELECT jika menggunakan aggregate mongodb
        title_en: 1, // 1 untuk include sebuah field
        title_jp: 1,
        studio: 1,
        status: 1,
        airing_date: 1,
        genres: 1,
        demographics: 1,
      },
    },
  ]);
}

async function findBasicById(id) {
  return Animes.findById(id).select(
    'title_en title_jp studio status airing_date genres demographics'
  );
}

async function getAnimePictures(id) {
  return Animes.findById(id).select('image_url');
}

async function getAnimeMoreInfo(id) {
  return Animes.findById(id, 'more_info');
}

async function getAnimeRecomendations(id) {
  return Animes.findById(id, 'recomendation');
}

async function getRandomAnime() {
  // menggunakan $sample untuk mendapatkan satu data acak
  // set size = 1 untuk mendapatkan satu data acak
  // https://stackoverflow.com/questions/2824157/how-can-i-get-a-random-record-from-mongodb
  return Animes.aggregate([{ $sample: { size: 1 } }]);
}

async function getExternalLinksByAnimeId(id) {
  return Animes.findById(id, 'external');
}

async function getAnimeStreaming(id){
  return Animes.getAnimeStreaming(id);
}

async function getCharacterFullById(animeId) {
   return Characters.getCharacterFullById(animeId); 
}

async function getCharacterById(animeId) {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  return Characters.getCharacterFullById(animeId); 
=======
  return Characters.getCharacterFullById(animeId); 
>>>>>>> Stashed changes
=======
  return Characters.getCharacterFullById(animeId); 
>>>>>>> Stashed changes
}

module.exports = {
  addAnime,
  getAnimes,
  findById,
  findBasicById,
  getAnimePictures,
  getAnimeMoreInfo,
  getAnimeRecomendations,
  getRandomAnime,
  getExternalLinksByAnimeId,
  getAnimeStreaming,
  getCharacterFullById,
  getCharacterById,
};
