'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reviews', [
        {
          rating:5 ,
          text:faker.lorem.paragraph(),
          userId:2 ,
          restaurantId:1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
           {
          rating:5 ,
          text:faker.lorem.paragraph(),
          userId:2 ,
          restaurantId:2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
            {
          rating:5 ,
          text:faker.lorem.paragraph(),
          userId:2 ,
          restaurantId:19,
          createdAt: new Date(),
          updatedAt: new Date()
        },
         {
          rating:5 ,
          text:faker.lorem.paragraph(),
          userId:2 ,
          restaurantId:20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
         {
          rating:5 ,
          text:faker.lorem.paragraph(),
          userId:2 ,
          restaurantId:9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
         {
          rating:5 ,
          text:faker.lorem.paragraph(),
          userId:2 ,
          restaurantId:15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
         {
          rating:5 ,
          text:faker.lorem.paragraph(),
          userId:2 ,
          restaurantId:12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
         {
          rating:5 ,
          text:faker.lorem.paragraph(),
          userId:2 ,
          restaurantId:8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
         {
          rating:4 ,
          text:faker.lorem.paragraph(),
          userId:3 ,
          restaurantId:3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
         {
          rating:4 ,
          text:faker.lorem.paragraph(),
          userId:3 ,
          restaurantId:4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
         {
          rating:4 ,
          text:faker.lorem.paragraph(),
          userId:3 ,
          restaurantId:22,
          createdAt: new Date(),
          updatedAt: new Date()
        },

         {
          rating:4 ,
          text:faker.lorem.paragraph(),
          userId:3 ,
          restaurantId:7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:faker.lorem.paragraph(),
          userId:3 ,
          restaurantId:19,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:faker.lorem.paragraph(),
          userId:3 ,
          restaurantId:21,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:faker.lorem.paragraph(),
          userId:3 ,
          restaurantId:23,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:faker.lorem.paragraph(),
          userId:3 ,
          restaurantId:25,
          createdAt: new Date(),
          updatedAt: new Date()
        },
         {
          rating:3 ,
          text:faker.lorem.paragraph(),
          userId:4 ,
          restaurantId:5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
{
          rating:3 ,
          text:faker.lorem.paragraph(),
          userId:4 ,
          restaurantId:6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:3 ,
          text:faker.lorem.paragraph(),
          userId:4 ,
          restaurantId:22,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:3 ,
          text:faker.lorem.paragraph(),
          userId:4 ,
          restaurantId:21,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:3 ,
          text:faker.lorem.paragraph(),
          userId:4 ,
          restaurantId:10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:3 ,
          text:faker.lorem.paragraph(),
          userId:4 ,
          restaurantId:16,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:3 ,
          text:faker.lorem.paragraph(),
          userId:4 ,
          restaurantId:18,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:2 ,
          text:faker.lorem.paragraph(),
          userId:5 ,
          restaurantId:7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
         {
          rating:2 ,
          text:faker.lorem.paragraph(),
          userId:5 ,
          restaurantId:8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
         {
          rating:2 ,
          text:faker.lorem.paragraph(),
          userId:5 ,
          restaurantId:23,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:2 ,
          text:faker.lorem.paragraph(),
          userId:5 ,
          restaurantId:11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:2 ,
          text:faker.lorem.paragraph(),
          userId:5 ,
          restaurantId:15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:2 ,
          text:faker.lorem.paragraph(),
          userId:5 ,
          restaurantId: 17,
          createdAt: new Date(),
          updatedAt: new Date()
        },

         {
          rating:1 ,
          text:faker.lorem.paragraph(),
          userId:6 ,
          restaurantId:9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:1 ,
          text:faker.lorem.paragraph(),
          userId:6 ,
          restaurantId:10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:1 ,
          text:faker.lorem.paragraph(),
          userId:6 ,
          restaurantId:24,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:1 ,
          text:faker.lorem.paragraph(),
          userId:6 ,
          restaurantId:14,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:1 ,
          text:faker.lorem.paragraph(),
          userId:6 ,
          restaurantId:12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:1 ,
          text:faker.lorem.paragraph(),
          userId:6 ,
          restaurantId:20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:5 ,
          text:faker.lorem.paragraph(),
          userId:7 ,
          restaurantId:11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
         {
          rating:5 ,
          text:faker.lorem.paragraph(),
          userId:7 ,
          restaurantId:12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:5 ,
          text:faker.lorem.paragraph(),
          userId:7 ,
          restaurantId:25,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:5 ,
          text:faker.lorem.paragraph(),
          userId:7 ,
          restaurantId:7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:5 ,
          text:faker.lorem.paragraph(),
          userId:7 ,
          restaurantId:9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:5 ,
          text:faker.lorem.paragraph(),
          userId:7 ,
          restaurantId:13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:faker.lorem.paragraph(),
          userId:8 ,
          restaurantId:13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:faker.lorem.paragraph(),
          userId:8 ,
          restaurantId:14,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:faker.lorem.paragraph(),
          userId:8 ,
          restaurantId:8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:faker.lorem.paragraph(),
          userId:8 ,
          restaurantId:6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:faker.lorem.paragraph(),
          userId:8 ,
          restaurantId:22,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:3 ,
          text:faker.lorem.paragraph(),
          userId:9 ,
          restaurantId:15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:3 ,
          text:faker.lorem.paragraph(),
          userId:9 ,
          restaurantId:16,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:3 ,
          text:faker.lorem.paragraph(),
          userId:9 ,
          restaurantId:1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:3 ,
          text:faker.lorem.paragraph(),
          userId:9 ,
          restaurantId:3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:3 ,
          text:faker.lorem.paragraph(),
          userId:9 ,
          restaurantId:5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:faker.lorem.paragraph(),
          userId:10 ,
          restaurantId:17,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:faker.lorem.paragraph(),
          userId:10 ,
          restaurantId:18,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:faker.lorem.paragraph(),
          userId:10 ,
          restaurantId:2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:faker.lorem.paragraph(),
          userId:10 ,
          restaurantId:4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:faker.lorem.paragraph(),
          userId:10 ,
          restaurantId:24,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
