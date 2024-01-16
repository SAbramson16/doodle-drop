const { Comment } = require('../models');

const commentData = [
  {
      comment: 'This is a fantastic piece!',
      user_id: 1,
      art_id: 1
  },
  {
    comment: 'This kinda sucks...',
    user_id: 2,
    art_id: 1
  },
  {
    comment: 'Looks like something my kid drew.',
    user_id: 1,
    art_id: 2
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
