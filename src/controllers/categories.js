const express = require('express');
const router = express.Router();

const {getCategories} = require('../services/categories');

router.get('/', async (req, res) => {
  try {
    const categories = await getCategories();

    res.status(200).send({
      categories: categories.Items
    });
  } catch (e) {
    res.status(500).send({
      message: "Error occurred",
      error: e
    });
  }
});

module.exports = router;
