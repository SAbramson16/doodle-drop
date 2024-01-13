const express = require('express');
const fs = require('fs');
const router = express.Router();

// Read comments from JSON file
function getComments() {
  try {
    const data = fs.readFileSync('./data/comments.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading comments file:', error);
    return [];
  }
}

// Save comments to JSON file
function saveComments(comments) {
  fs.writeFileSync('./data/comments.json', JSON.stringify(comments, null, 2));
}

// Get all comments
router.get('/comments', (req, res) => {
  const comments = getComments();
  res.json(comments);
});

// Add a comment
router.post('/comments', (req, res) => {
  const { comment } = req.body;
  const comments = getComments();
  comments.push(comment);
  saveComments(comments);
  res.status(200).send('Comment added successfully');
});

// Delete a comment by index
router.delete('/comments/:index', (req, res) => {
  const index = parseInt(req.params.index);
  let comments = getComments();
  
  if (index >= 0 && index < comments.length) {
    comments.splice(index, 1);
    saveComments(comments);
    res.status(200).send('Comment deleted successfully');
  } else {
    res.status(400).send('Invalid index');
  }
});

module.exports = router;

