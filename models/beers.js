const connection = require('../db-config');
const db = connection.promise();

/**Fonction qui recupere toutes les bières dans la BDD */
const findMany = () => {
  return db.query('SELECT * FROM beers').then(result => result[0])
}

/**Fonction qui recupere une bière par id dans la BDD */
const findOne = (id) => {
  return db.query('SELECT * FROM beers WHERE id = ?', [id]).then(result => result[0][0])
}



module.exports = {
  findMany,
  findOne
}