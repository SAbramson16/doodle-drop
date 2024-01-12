const { User } = require('../models');

const userData =
[
    {
      "name": "Sharon",
      "email": "sharon@hotmail.com",
      "password": "password12345"
    },
    {
      "name": "Kay",
      "email": "kay@gmail.com",
      "password": "password12345"
    },
    {
      "name": "Anthony",
      "email": "anthony@aol.com",
      "password": "password12345"
    }
  ];

  const seedUsers = () => User.bulkCreate(userData);

  module.exports = seedUsers;
  