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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
