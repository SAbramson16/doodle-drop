const seedCategories = require('./categorySeeds');
const seedArt = require('./artSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedArt();
  console.log('\n----- ART SEEDED -----\n');

  process.exit(0);
};

seedAll();
