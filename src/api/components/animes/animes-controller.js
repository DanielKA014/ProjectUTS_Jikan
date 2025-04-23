const animeService = require('./animes-service');

async function addAnime(req, res) {
  try {
    const data = ({
      title_en: titleEN,
      title_jp: titleJP,
      episodes: episodes,
      studio: studio,
      status: animeStatus,
      season: season,
      airing_date: airing_date,
      age_rating: age_rating,
      demographics: demographics,
      genres: genres,
      duration_minutes: duration_minutes,
    } = req.body);

    if (!data) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Failed to add anime entry'
      );
    }

    const anime = await booksService.create(data);

    return response
      .status(201)
      .json({ message: 'Anime added successfully to the database entry' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getFullAnime(req, res) {
  try {
    const id = req.params.id;
    const anime = await animeService.getFullAnime(id);
    if (!anime) {
      return res.status(404).json({ message: 'Anime not found' });
    }
    res.json(anime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getAnimeById(req, res) {
  try {
    const id = req.params.id;
    const anime = await animeService.getAnimeById(id);
    if (!anime) {
      return res.status(404).json({ message: 'Anime not found' });
    }
    res.json(anime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getCharactersByAnimeId(req, res) {
  try {
    const id = req.params.id;
    const characters = await animeService.getCharactersByAnimeId(id);
    if (!characters || characters.length === 0) {
      return res
        .status(404)
        .json({ message: 'No characters found for this anime' });
    }
    res.json(characters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getAnimePictures(req, res) {
  try {
    const id = req.params.id;
    const anime = await animeService.getAnimePictures(id);
    // TO DO LIST:
    // w harus kembalikan link gambar kah? kalo iya,
    // daftar link jadikan data di schema anime atau gmn? ntar
    // kebanyakan models soalnya
    if (!anime) {
      return res.status(404).json({ message: 'Anime not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getAnimeMoreInfo(req, res) {
  try{
    const id = req.params.id;
    const anime = await animeService.getAnimeMoreInfo(id);
    if(!anime){
      return res.status(404).json({ message: 'Anime not found' });
    }
    res.json(anime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getAnimeRecomendations(req, res){
  try{
    const id = req.params.id;
    const anime = await animeService.getAnimeRecomendations(id);
    if(!anime){
      return res.status(404).json({ message: 'Anime not found' });
    }
    res.json(anime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getExternalLinksByAnimeId(req,res) {
  try {
    const id = req.params.id;
    const externalLinks = await animeService.getExternalLinksByAnimeId(id);
    if(!externalLinks) {
      return res.status(404).json({ message: 'Anime not found or no external links available' });
    }
    res.json(externalLinks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getAnimeStreaming(req,res){
  try{
    const id = req.params.id;
    const anime = await animeService.getAnimeStreaming(id);
    if(!anime){
      return res.statue(404).json({massage: 'Anime not found' });
    }
    res.json(anime)
  } catch (error) {
    console.error(error);
    res.statue(500).json({ message: 'Server error' });
  }
}

async function getCharacterFullById(req, res) {
  try {
    const id = req.params.id; 
    const character = await animeService.getCharacterFullById(id);

    if (!character) {
      return res
        .status(404)
        .json({ message: 'Character not found with this ID' });
    }
    res.json(character); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getCharacterById(req, res) {
  try {
    const id = req.params.id;
    const character = await animeService.getCharacterById(id);

    if (!character) {
      return res
        .status(404)
        .json({ message: 'Character not found with this ID' }); 
    }
    res.json(character); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' }); 
  }
}

module.exports = {
  addAnime,
  getFullAnime,
  getAnimeById,
  getCharactersByAnimeId,
  getAnimePictures,
  getAnimeMoreInfo,
  getAnimeRecomendations,
  getExternalLinksByAnimeId,
  getAnimeStreaming,
  getCharacterFullById,
  getCharacterById,
};
