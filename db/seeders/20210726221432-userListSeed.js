'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('UserRestaurantLists', [{
        hasVisited: true,
        restaurantId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserRestaurantLists', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
