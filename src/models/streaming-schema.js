module.exports = db =>
  db.model(
    'Streaming',
    db.Schema({
      animeId: {
        type: db.Schema.Types.ObjectId,
        ref: 'Animes',
        require: true,
      },
      platforms: [{
        name: { type: String, require: true },
        url: { type: String, require: true },
      },],
    })
  );