const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {

    // When a user searches '/api/tags' it will display all the table contents from Tag and Product within 'tagData'
    const tagData = await Tag.findAll({
      include: [{ model: Product }]
    });

    // Then sends the 'tagData' as a response in JSON format
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {

    // Takes the users ID search and matches it to the same id within the tag table/model and stores it within 'tagData'
    const tagData = await Tag.findByPk(req.params.id, {

      // It will also respond with the associated Product model of the user searched tag ID 
      include: [{ model: Product }]
    });

    // If it cannot find an ID that matches to that of the database, it will send back a response stating so
    if (!tagData) {
      res.status(404).json({ message: 'Cannot find tag with this id!' });
      return;
    }

    // Otherwise it will respond with the stored data in 'tagData'
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
