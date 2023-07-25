const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {

    // When a user searches '/api/categories' it will display all the table contents within 'categoryData'
    const categoryData = await Category.findAll();

    // Then sends the 'categoryData' as a response in JSON format
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {

    // Takes the users ID search and matches it to the same id within the category table/model and stores it within 'categoryData'
    const categoryData = await Category.findByPk(req.params.id, {

      // It will also respond with the associated Product model of the user searched category ID 
      include: [{ model: Product }]
    });

    // If it cannot find an ID that matches to that of the database, it will send back a response stating so
    if (!categoryData) {
      res.status(404).json({ message: 'Cannot find category with this id!' });
      return;
    }

    // Otherwise it will respond with the stored data in 'categoryData'
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
