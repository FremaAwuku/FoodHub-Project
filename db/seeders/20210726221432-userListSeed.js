'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('UserRestaurantLists', [{
        hasVisited: true,
        restaurantId: 1,
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hasVisited: false,
        restaurantId: 2,
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hasVisited: true,
        restaurantId: 7,
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hasVisited: false,
        restaurantId: 9,
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hasVisited: false,
        restaurantId: 22,
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hasVisited: false,
        restaurantId: 15,
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hasVisited: false,
        restaurantId: 5,
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        hasVisited: false,
        restaurantId: 19,
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        hasVisited: false,
        restaurantId: 8,
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserRestaurantLists', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
