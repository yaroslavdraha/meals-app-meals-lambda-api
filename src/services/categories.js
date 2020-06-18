const db = require('../database');

const categoriesTableName = 'meals-categories';

const getCategories = async () => {
  const params = {
    TableName: categoriesTableName
  }

  return db.scan(params).promise();
}

module.exports = {
  getCategories
}
