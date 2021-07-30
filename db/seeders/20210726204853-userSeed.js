'use strict';
const faker = require('faker')
module.exports = {
  up: (queryInterface, Sequelize) => {


    return queryInterface.bulkInsert('Users', [
      {
        firstName: "ADMIN",  
        lastName: "ADMIN",
        email: 'BAB@foodHub.io',
        hashedPassword: 'adminPassword',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "DEMO",  
        lastName: "USER",
        email: 'demo@demo.com',
        hashedPassword: 'demoPassword',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: faker.name.firstName(),  
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        hashedPassword: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      },

        ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
