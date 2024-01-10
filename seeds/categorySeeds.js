const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Cartoon',
  },
  {
    category_name: 'Realism',
  },
  {
    category_name: 'Abstract',
  },
  {
    category_name: 'Digital',
  },
  {
    category_name: 'Sketch',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
