const express = require('express');
const router = express.Router();
const withAuth = require('../utils/auth');
const { Art, User } = require('../models');

router.get('/', async (req, res) => {
  try {
    // Get all arts and JOIN with user data.
    const artData = await Art.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const arts = artData.map((art) => art.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('home', { 
      arts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/cartoon', async (req, res) => {
  try {
    const arts = await getArtsByCategoryId(1);
    renderCategory(res, arts, req.session.logged_in);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/cartoon', async (req, res) => {
  try {
    const arts = await getArtsByCategoryId(1);
    renderCategory(res, arts, req.session.logged_in);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/cartoon', async (req, res) => {
  try {
    const arts = await getArtsByCategoryId(1);
    renderCategory(res, arts, req.session.logged_in);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/realism', async (req, res) => {
  try {
    const arts = await getArtsByCategoryId(2);
    renderCategory(res, arts, req.session.logged_in);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/abstract', async (req, res) => {
  try {
    const arts = await getArtsByCategoryId(3);
    renderCategory(res, arts, req.session.logged_in);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/digital', async (req, res) => {
  try {
    const arts = await getArtsByCategoryId(4);
    renderCategory(res, arts, req.session.logged_in);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/sketch', async (req, res) => {
  try {
    const arts = await getArtsByCategoryId(5);
    renderCategory(res, arts, req.session.logged_in);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/art/:id', async (req, res) => {
  try {
    const artData = await Art.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const art = artData.get({ plain: true });

    res.render('art', {
      art,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Art }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
  
// Login route
router.get('/login', (req, res) => {
  res.render('login');
});

// Profile route
router.get('/profile', (req, res) => {
    res.render('profile'); 
});

// Upload route
router.get('/upload', (req, res) => {
    res.render('upload');
});

// Home route
router.get('/home', (req, res) => {
    res.render('home'); 
});

async function getArtsByCategoryId(categoryId) {
  // Get arts and JOIN with user data.
  const artData = await Art.findAll({
    where: { category_id: 1 },
    include: [
      {
        model: User,
        attributes: ['name'],
      },
    ],
  });

  // Serialize data so the template can read it
  return artData.map((art) => art.get({ plain: true }));
} 

function renderCategory(res, arts, loggedIn) {
  // Pass serialized data and session flag into template
  res.render('categories', { arts, loggedIn});
}

// Export the router
module.exports = router;
