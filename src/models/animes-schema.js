module.exports = (db) =>
  db.model(
    'Animes',
    db.Schema({
      title_en: { type: String, required: true },
      title_jp: { type: String, required: true },
      studio: {
        type: String,
        required: false,
      },
      status: {
        type: String,
        enum: ['Airing', 'Completed', 'Upcoming'],
        required: true,
      },
      season: {
        type: String,
        enum: ['Winter', 'Spring', 'Summer', 'Fall', 'Unknown'],
        required: false,
      },
      airing_date: {
        start: {
          type: Date, // null if the airing date is TBA
          required: false,
        },
        end: {
          type: Date, // null if the anime is still airing
          required: false,
        },
      },
      age_rating: {
        type: String,
        enum: ['G', 'PG', 'PG-13', 'R-17+'],
        required: true,
      },
      demographics: {
        type: String,
        enum: ['shounen', 'shoujo', 'seinen', 'josei', 'kodomo'],
        required: true,
      },
      more_info: {
        type: String,
        required: false,
      },
      genres: {
        type: [String],
        required: true,
      },
      duration: String,
      image_url: [String],
    })
  );
