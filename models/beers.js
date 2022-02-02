const connection = require('../db-config');
const db = connection.promise();

const findMany = () => {
  return db.query('SELECT * FROM beers WHERE').then(result => result[0])
}

const findOne = (id) => {
  return db.query('SELECT * FROM beers WHERE id = ?', [id]).then(result => result[0][0])
}



module.exports = {
  findMany,
  findOne
}