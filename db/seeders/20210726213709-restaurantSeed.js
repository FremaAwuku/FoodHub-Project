'use strict';
const faker = require('faker');




module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Restaurants', [ {
        name: "Papadillo's",
        address: faker.address.streetAddress(),
        cuisine: " Italian",
        rating: 5,
        numberOfReviews:2,
        imgURL: faker.image.imageUrl(300,300,"food"),
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Restaurants', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
