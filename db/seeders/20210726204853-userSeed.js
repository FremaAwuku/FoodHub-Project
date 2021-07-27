'use strict';
const faker = require('faker')
module.exports = {
  up: (queryInterface, Sequelize) => {


    return queryInterface.bulkInsert('Users', [
      {
        fullName:  'ADMIN',
        email: 'BAB@foodHub.io',
        hashedPassword: 'adminPassword',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName:  faker.name.firstName() +' '+ faker.name.lastName() ,
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
