const { errorResponder, errorTypes } = require('../../../core/errors');
const characterService = require('./characters-service');

async function addCharactersToAnime(req, res) {
  try {
    const animeId = req.params.id;
    const { name, nicknames, about } = req.body;

    const data = { name, nicknames, about, animeId };

    if (!name) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Character must have a full name!'
      );
    }

    if (!about) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Character must have an about description!'
      );
    }

    const character = await characterService.addCharactersToAnime(data);

    if (!character) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to add character entry'
      );
    }

    return res
      .status(201)
      .json({ message: 'Character added successfully to the database entry' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getCharactersByAnimeId(req, res) {
  try {
    const animeId = req.params.id;
    const characters = await characterService.getCharactersByAnimeId(animeId);

    if (!characters || characters.length === 0) {
      return res.status(404).json({
        message: 'No characters found for this anime',
      });
    }

    return res.json(characters);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

async function getAllCharacters(req, res) {
  try {
    // default page = 1 dan limit = 3
    const { page = 1, limit = 3 } = req.query;
    const characters = await characterService.getAllCharacters(
      parseInt(page),
      parseInt(limit)
    );

    if (!characters || characters.length === 0) {
      return res.status(404).json({ message: 'No characters found' });
    }

    return res.status(200).json(characters);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

async function getCharacterById(req, res) {
  try {
    const { id } = req.params;
    const character = await characterService.getCharacterById(id);

    if (!character) {
      return res.status(404).json({
        message: 'Character not found',
      });
    }

    return res.json(character);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

async function deleteCharacter(req, res) {
  try {
    const { id } = req.params;
    const character = await characterService.deleteCharacter(id);

    if (!character) {
      return res.status(404).json({
        message: 'Character not found',
      });
    }

    return res.json({
      message: 'Character deleted successfully',
      character,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

async function getCharacterFullById(req, res) {
  try {
    const characterId = req.params.characterId;
    const character = await characterService.getCharacterFullById(characterId);

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
  addCharactersToAnime,
  getCharactersByAnimeId,
  getAllCharacters,
  getCharacterById,
  deleteCharacter,
  getCharacterFullById,
};
