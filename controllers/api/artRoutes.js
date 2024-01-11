const router = require('express').Router();
const { Art, Category, User } = require('../../models');

// The `/api/art` endpoint

// get all art 
router.get('/', async (req, res) => {
  // find all art
  try {
    const artData = await Art.findAll( {
      include: [{ model: Category }, { model: User }]
    });
    console.log(artData);
    res.status(200).json(artData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one product
router.get('/:id', async (req, res) => {
  // find a single art by its `id`
  try {
    const artData = await Art.findByPk(req.params.id, {
      include: [{ model: Category }, { model: User }]
    });
    if (!artData) {
      res.status(404).json({ message: 'No art found with that id!'});
      return;
    }
    res.status(200).json(artData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new art 
router.post('/', async (req, res) => {
    // create a new art
    try {
      const artData = await Art.create(req.body, {
        include: [{ model: Category }, { model: Art }]
      });
      res.status(200).json(artData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  

// // update product
// router.put('/:id', (req, res) => {
//   // update product data
//   Product.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((product) => {
//       if (req.body.tagIds && req.body.tagIds.length) {
        
//         ProductTag.findAll({
//           where: { product_id: req.params.id }
//         }).then((productTags) => {
//           // create filtered list of new tag_ids
//           const productTagIds = productTags.map(({ tag_id }) => tag_id);
//           const newProductTags = req.body.tagIds
//           .filter((tag_id) => !productTagIds.includes(tag_id))
//           .map((tag_id) => {
//             return {
//               product_id: req.params.id,
//               tag_id,
//             };
//           });

//             // figure out which ones to remove
//           const productTagsToRemove = productTags
//           .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
//           .map(({ id }) => id);
//                   // run both actions
//           return Promise.all([
//             ProductTag.destroy({ where: { id: productTagsToRemove } }),
//             ProductTag.bulkCreate(newProductTags),
//           ]);
//         });
//       }

//       return res.json(product);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

router.delete('/:id', async (req, res) => {
  // delete one art by its `id` value
  try {
    const artData = await Art.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!artData) {
      res.status(404).json({ message: 'No art found with that id!'});
      return;
    }
    res.status(200).json(artData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
