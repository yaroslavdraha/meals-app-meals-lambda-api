
const MEALS = require('./mock-data/meals');

const getMeals = async () => {
  return MEALS;
}

module.exports = {
  getMeals
}
