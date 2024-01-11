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



//"dependencies": {
//     "bcrypt": "^5.0.0",
//     "connect-session-sequelize": "^7.0.4",
//     "dotenv": "^8.2.0",
//     "express": "^4.17.1",
//     "express-handlebars": "^5.2.0",
//     "express-session": "^1.17.1",
//     "mysql2": "^2.2.5",
//     "sequelize": "^6.3.5"
