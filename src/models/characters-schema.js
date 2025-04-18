module.exports = (db) =>
  db.model(
    'Characters',
    db.Schema({
      name: String,
      nicknames: {
        type: [String],
      },
      about: String,
      animeId: {
        // characters menyimpan FK yg merujuk ke animes-schema
        type: db.Schema.Types.ObjectId,
        ref: 'Animes',
        required: true,
      },
    })
  );
