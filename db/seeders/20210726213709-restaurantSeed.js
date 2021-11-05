'use strict';
const faker = require('faker');




module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Restaurants', [ {
        name: "Papadillo's",
        address: faker.address.streetAddress(),
        cuisine: "Italian",
        // rating: 8,
        // numberOfReviews:2,
        imgURL:"https://bucket-foodhub.s3.us-east-2.amazonaws.com/mould-cheese-festival.jpeg" ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mamma Mia's",
        address: faker.address.streetAddress(),
        cuisine: "Italian",
        // rating: 9,
        // numberOfReviews:2,
        imgURL:"https://bucket-foodhub.s3.us-east-2.amazonaws.com/Roman-grandma-cooking-pasta-1140x641.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Itsa Pasta",
        address: faker.address.streetAddress(),
        cuisine: "Italian",
        // rating: 7,
        // numberOfReviews:2 ,
        imgURL:"https://bucket-foodhub.s3.us-east-2.amazonaws.com/itl-rest-3.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "O Mio Bambino",
        address: faker.address.streetAddress(),
        cuisine: "Italian",
        // rating: 8,
        // numberOfReviews:2,
        imgURL:"https://bucket-foodhub.s3.us-east-2.amazonaws.com/itl-rest-4.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        name: "Leaning Tower of Pizza Palace",
        address: faker.address.streetAddress(),
        cuisine: "Italian",
        // rating: 6,
        // numberOfReviews:2,
        imgURL:"https://bucket-foodhub.s3.us-east-2.amazonaws.com/itl-rest-5.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
        name: "Bombay-Xplosion",
        address: faker.address.streetAddress(),
        cuisine: "Indian",
        // rating:7,
        // numberOfReviews:2,
        imgURL:"https://bucket-foodhub.s3.us-east-2.amazonaws.com/ind-rest-1.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        name: "Taste of New Delhi",
        address: faker.address.streetAddress(),
        cuisine: "Indian",
        // rating: 11,
        // numberOfReviews:3,
        imgURL:"https://bucket-foodhub.s3.us-east-2.amazonaws.com/ind-rest-2.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        name: "Deliciously Desi",
        address: faker.address.streetAddress(),
        cuisine: "Indian",
        // rating: 12,
        // numberOfReviews:3,
        imgURL:"https://bucket-foodhub.s3.us-east-2.amazonaws.com/ind-rest-3.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        name: "Naan and Rice",
        address: faker.address.streetAddress(),
        cuisine: "Indian",
        // rating: 6,
        // numberOfReviews:2,
        imgURL:"https://bucket-foodhub.s3.us-east-2.amazonaws.com/ind-rest-4.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        name: "Sweet & Savory Saffron Shope",
        address: faker.address.streetAddress(),
        cuisine: "Indian",
        // rating: 4,
        // numberOfReviews:2,
        imgURL:"https://bucket-foodhub.s3.us-east-2.amazonaws.com/ind-rest-5.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "La Carreta Taqueria",
        address: faker.address.streetAddress(),
        cuisine: "Mexican",
        // rating: 7,
        // numberOfReviews:2,
        imgURL:"https://bucket-foodhub.s3.us-east-2.amazonaws.com/mex-rest-1.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
 {
        name: "Tacos y Tamales",
        address: faker.address.streetAddress(),
        cuisine: "Mexican",
        // rating: 10,
        // numberOfReviews:2,
        imgURL:"https://bucket-foodhub.s3.us-east-2.amazonaws.com/mex-rest-2.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Todos Tostados",
        address: faker.address.streetAddress(),
        cuisine: "Mexican",
        // rating: 9,
        // numberOfReviews:2,
        imgURL:"https://bucket-foodhub.s3.us-east-2.amazonaws.com/mex-rest-3.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Rosia's Panderia",
        address: faker.address.streetAddress(),
        cuisine: "Mexican",
        // rating: 5,
        // numberOfReviews:2,
        imgURL:"https://bucket-foodhub.s3.us-east-2.amazonaws.com/mex-rest-4.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        name: "Holy Mole",
        address: faker.address.streetAddress(),
        cuisine: "Mexican",
        // rating: 10,
        // numberOfReviews:3,
        imgURL:"https://bucket-foodhub.s3.us-east-2.amazonaws.com/mex-rest-5.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
 {
        name: "Big Boss Burgers",
        address: faker.address.streetAddress(),
        cuisine: "American",
        // rating: 6,
        // numberOfReviews:2,
        imgURL:"https://bucket-foodhub.s3.us-east-2.amazonaws.com/amer-rest-1.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "HomeGrownCookin BBQ",
        address: faker.address.streetAddress(),
        cuisine: "American",
        // rating: 6,
        // numberOfReviews:2,
        imgURL:"https://bucket-foodhub.s3.us-east-2.amazonaws.com/amer-rest-2.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        name: "Mickey's Diner",
        address: faker.address.streetAddress(),
        cuisine: "American",
        // rating: 7,
        // numberOfReviews:2,
        imgURL:"https://bucket-foodhub.s3.us-east-2.amazonaws.com/amer-rest-3.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        name: "Mama's Cozy Kitchen",
        address: faker.address.streetAddress(),
        cuisine: "American",
        // rating: 9,
        // numberOfReviews:2,
        imgURL:"https://bucket-foodhub.s3.us-east-2.amazonaws.com/amer-rest-4.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
 {
        name: "Southern Soul",
        address: faker.address.streetAddress(),
        cuisine: "American",
        // rating: 6,
        // numberOfReviews:2,
        imgURL:"https://bucket-foodhub.s3.us-east-2.amazonaws.com/amer-rest-5.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        name: "Kingston Krab",
        address: faker.address.streetAddress(),
        cuisine: "Jamaican",
        // rating: 7,
        // numberOfReviews:2,
        imgURL:"https://bucket-foodhub.s3.us-east-2.amazonaws.com/jam-rest-1.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
 {
        name: "Carribean Comforts",
        address: faker.address.streetAddress(),
        cuisine: "Jamaican",
        // rating: 11,
        // numberOfReviews:3,
        imgURL:"https://bucket-foodhub.s3.us-east-2.amazonaws.com/jam-rest-2.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jerk and Jamrock",
        address: faker.address.streetAddress(),
        cuisine: "Jamaican",
        // rating: 6,
        // numberOfReviews:2,
        imgURL:"https://bucket-foodhub.s3.us-east-2.amazonaws.com/jam-rest-3.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        name: "Jamaican Juice Joint ",
        address: faker.address.streetAddress(),
        cuisine: "Jamaican",
        // rating: 5,
        // numberOfReviews:2,
        imgURL:"https://bucket-foodhub.s3.us-east-2.amazonaws.com/jam-rest-4.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        name: "Patties & Plantains",
        address: faker.address.streetAddress(),
        cuisine: "Jamaican",
        // rating: 9,
        // numberOfReviews:2,
        imgURL:"https://bucket-foodhub.s3.us-east-2.amazonaws.com/jam-rest-5.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Restaurants', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
