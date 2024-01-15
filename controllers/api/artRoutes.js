// middleware for multipart uploads to S3
const multer = require('multer');
const router = require('express').Router();


const { Art, Category, Comment, User } = require('../../models');
const { deleteFromS3, s3Upload, generateS3Url } = require('../../utils/aws');

const storage = multer.memoryStorage();
const upload = multer({ storage });

// The `/api/art` endpoint

// get all art 
router.get('/', async (req, res) => {
  // find all art
  try {
    const artData = await Art.findAll( {
      include: [{ model: Category }, { model: Comment }, { model: User }]
    });

    for (const art of artData) {
      art.imageUrl = await generateS3Url(art.imageUrl);
    }

    res.status(200).json(artData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

// get one art
router.get('/:id', async (req, res) => {
  // find a single art by its `id`
  try {
    const artData = await Art.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Comment }, { model: User }]
    });
    if (!artData) {
      res.status(404).json({ message: 'No art found with that id!'});
      return;
    }

    artData.imageUrl = generateS3Url(artData.imageUrl);
    res.status(200).json(artData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', upload.single('image'), async (req, res) => {
  // create a new art
  try {
    const categoryId = parseInt(req.body.category_id, 10);
    const newArt = await Art.create({
        ...req.body, category_id: categoryId,
      include: [{ model: Category }, { model: User }]
    });

    const imageUrl = await s3Upload(req.file.originalname, req.file.buffer, req.file.mimetype);
    newArt.imageUrl = imageUrl;
    await newArt.save({ fields: ['imageUrl'] });
 
    res.redirect('/');
  } catch (err) {
    res.redirect('/');
  }
});

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

    await deleteFromS3(artData.imageUrl);
    res.status(200).json(artData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;