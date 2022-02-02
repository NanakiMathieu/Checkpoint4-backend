const beersRouter = require('express').Router();
const { findMany, findOne } = require('../models/beers');

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

module.exports = beersRouter;