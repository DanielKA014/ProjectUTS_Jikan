const express = require('express');
const route = express.Router();
const characterController = require('./characters-controller');

module.exports = (app) => {
  // definisikan rute disini untuk docs /characters
  app.use('/characters', route);
};
