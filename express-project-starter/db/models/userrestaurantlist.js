'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserRestaurantList = sequelize.define('UserRestaurantList', {
    hasVisited: DataTypes.BOOLEAN,
    restaurantId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  UserRestaurantList.associate = function(models) {
    // associations can be defined here
  };
  return UserRestaurantList;
};