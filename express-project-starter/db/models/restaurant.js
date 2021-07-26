'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    cuisine: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    numberOfReviews: DataTypes.INTEGER
  }, {});
  Restaurant.associate = function (models) {
    Restaurant.hasMany(models.Review, { foreignKey: 'restaurantId' })
    Restaurant.hasMany(models.UserResterauntList, {foreignKey: 'restaurantId'})
  };
  return Restaurant;
};
