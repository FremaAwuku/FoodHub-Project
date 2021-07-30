'use strict';
const faker = require('faker')
const users = [...Array(10)].map((user) => (
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    hashedPassword: faker.internet.password(8),
    isAdmin: false,
    createdAt: new Date(),
    updatedAt: new Date()
  }
))
const demoUser  =     [{
    firstName: 'DEMO',
    lastName: 'USER',
    email: 'demo@demo.com',
    hashedPassword: 'DemoPassword',
    isAdmin: false,
    createdAt: new Date(),
    updatedAt: new Date()
},
   {
        firstName: "ADMIN",  
        lastName: "ADMIN",
        email: 'BAB@foodHub.io',
        hashedPassword: 'adminPassword',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
]
  const data = users.concat(demoUser)
module.exports = {
  up: (queryInterface, Sequelize) => {


    return queryInterface.bulkInsert('Users', data, {});


  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};

