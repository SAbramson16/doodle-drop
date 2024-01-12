const express = require('express');
const router = express.Router();

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

// Export the router
module.exports = router;
