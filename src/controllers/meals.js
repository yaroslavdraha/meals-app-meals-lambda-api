const express = require('express');
const router = express.Router();

const {getMeals} = require('../services/meals');

router.get('/', async (req, res) => {
  try {
    const meals = await getMeals();

    res.status(200).send({
      meals
    });
  } catch (e) {
    res.status(500).send({
      message: "Error occurred",
      error: e
    });
  }
});

module.exports = router;
