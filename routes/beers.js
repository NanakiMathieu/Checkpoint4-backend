const beersRouter = require('express').Router();
const { findMany, findOne } = require('../models/beers');
const beers = require('../models/beers');

/**Route qui récupère toutes les bieres dans le BDD */
beersRouter.get('/', (req, res) => {
  findMany()
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
})

/**Route qui récupère une biere par ID dans la BDD */
beersRouter.get('/:id', (req, res) => {
  findOne(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
})

/**Route pour poster une nouvelle biere */

beersRouter.post('/ajouter', (req, res) => {
  console.log(req.body);
  const {
    name,
    description,
    image_url,
    ph,
  } = req.body;
  beers.postBiere({
    name,
    description,
    image_url,
    ph,
  })
    .then((result) => {
      console.log(result);
      res.status(201).send({ statut: 'bière sauvegardée', ...req.body });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('erreur lors de la sauvegarde de la bière')
    });
});

module.exports = beersRouter;