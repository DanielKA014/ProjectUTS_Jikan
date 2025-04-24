const { errorResponder, errorTypes } = require('../../../core/errors');
const characterService = require('./characters-service');

async function getCharactersByAnimeId(req, res) {
  try {
    const { id } = req.params;
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
    // kurangi dengan 1 agar indeks page mulai dari 1 dari sisi client
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
    const id = req.params.id; 
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
  getCharactersByAnimeId,
  getAllCharacters,
  getCharacterById,
  deleteCharacter,
  getCharacterFullById,
};
