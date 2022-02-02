const express = require('express');
require('dotenv').config();
const app = express();
const connection = require('./db-config');

const { setUpRoutes } = require('./routes');

const PORT = process.env.PORT || 5000

connection.connect(err => {
  if (err) console.log('Erreur de connection a la DB', err.stack)
  else console.log('Connection a la DB ok id ' + connection.threadId)
})

setUpRoutes(app);

app.listen(5000, () => {
  console.log('Server is running on port ' + PORT)
})