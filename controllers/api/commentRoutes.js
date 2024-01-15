const express = require('express');
const fs = require('fs');
const router = express.Router();
const { Comment } = require('../../models');

// Read comments from JSON file
async function getComments() {
  try {
    return await Comment.findAll();
  } catch (error) {
    throw error;
  }
}

// Get all comments
router.get('/comments', async (req, res) => {
  const comments = await getComments();
  res.json(comments);
});

// Add a comment
router.post('/comments', async (req, res) => {
  const newComment = await Comment.create({ ...req.body });
  res.redirect('/');
});

// Delete a comment by index
router.delete('/comments/:index', (req, res) => {
  res.status(200);
});

module.exports = router;

