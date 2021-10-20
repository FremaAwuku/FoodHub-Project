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
        imgURL:"https://tul.imgix.net/content/article/mould-cheese-festival.png?auto=format,compress&w=1200&h=630&fit=crop" ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mamma Mia's",
        address: faker.address.streetAddress(),
        cuisine: "Italian",
        // rating: 9,
        // numberOfReviews:2,
        imgURL:"https://viewfinder.expedia.com/wp-content/uploads/2020/05/Roman-grandma-cooking-pasta-1140x641.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Itsa Pasta",
        address: faker.address.streetAddress(),
        cuisine: "Italian",
        // rating: 7,
        // numberOfReviews:2 ,
        imgURL:"https://www.italian-feelings.com/wp-content/uploads/2016/03/cibo-italiano-estero2-940x625.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "O Mio Bambino",
        address: faker.address.streetAddress(),
        cuisine: "Italian",
        // rating: 8,
        // numberOfReviews:2,
        imgURL:"https://i.pinimg.com/originals/f6/ac/6b/f6ac6bca6d67b9557a9d9bede5f9a3c0.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        name: "Leaning Tower of Pizza Palace",
        address: faker.address.streetAddress(),
        cuisine: "Italian",
        // rating: 6,
        // numberOfReviews:2,
        imgURL:"https://wallpaper.csplague.com/wp-content/uploads/2020/03/Flat-lay-with-Italian-pizza-by-Grafvision-photography-on-Creative.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
        name: "Bombay-Xplosion",
        address: faker.address.streetAddress(),
        cuisine: "Indian",
        // rating:7,
        // numberOfReviews:2,
        imgURL:"https://sukhis.com/wp-content/uploads/2017/06/Appetizers.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        name: "Taste of New Delhi",
        address: faker.address.streetAddress(),
        cuisine: "Indian",
        // rating: 11,
        // numberOfReviews:3,
        imgURL:"https://tampamagazines.com/wp-content/uploads/2020/12/Spice-Kitchen_6578-copy.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        name: "Deliciously Desi",
        address: faker.address.streetAddress(),
        cuisine: "Indian",
        // rating: 12,
        // numberOfReviews:3,
        imgURL:"https://insidenirvana.com/wp-content/uploads/2015/06/inside2.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        name: "Naan and Rice",
        address: faker.address.streetAddress(),
        cuisine: "Indian",
        // rating: 6,
        // numberOfReviews:2,
        imgURL:"https://thumbor.thedailymeal.com/Jz30JU_ra2iW4tvAt6YBOSI1FOk=/870x565/filters:focal(595x384:596x385)/https://www.thedailymeal.com/sites/default/files/2018/08/24/0.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        name: "Sweet & Savory Saffron Shope",
        address: faker.address.streetAddress(),
        cuisine: "Indian",
        // rating: 4,
        // numberOfReviews:2,
        imgURL:"https://www.sentinelassam.com/wp-content/uploads/2020/04/diwali-sweets_620x350_71477722448.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "La Carreta Taqueria",
        address: faker.address.streetAddress(),
        cuisine: "Mexican",
        // rating: 7,
        // numberOfReviews:2,
        imgURL:"https://cdn.postindependent.com/wp-content/uploads/sites/6/2020/01/frida-gpi-011120-1-1024x683.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
 {
        name: "Tacos y Tamales",
        address: faker.address.streetAddress(),
        cuisine: "Mexican",
        // rating: 10,
        // numberOfReviews:2,
        imgURL:"https://2l7g9kgsh281akevs49v281d-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/129392876_3849139691783633_408054825014186052_o-1128x670.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Todos Tostados",
        address: faker.address.streetAddress(),
        cuisine: "Mexican",
        // rating: 9,
        // numberOfReviews:2,
        imgURL:"https://assets.bonappetit.com/photos/5e3e3d1ac665190009efd5e2/3:2/w_1878,h_1252,c_limit/Beet-Tostada-with-Fried-Egg.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Rosia's Panderia",
        address: faker.address.streetAddress(),
        cuisine: "Mexican",
        // rating: 5,
        // numberOfReviews:2,
        imgURL:"https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/cover-for-mexican-desserts.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        name: "Holy Mole",
        address: faker.address.streetAddress(),
        cuisine: "Mexican",
        // rating: 10,
        // numberOfReviews:3,
        imgURL:"https://img.sunset02.com/sunsetm/wp-content-uploads/2019-03-28UTC09/holiday-classics-turkey-mole-poblano-sun-1118-1200x900.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
 {
        name: "Big Boss Burgers",
        address: faker.address.streetAddress(),
        cuisine: "American",
        // rating: 6,
        // numberOfReviews:2,
        imgURL:"https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormick-us/recipes/old-bay/b/2000/backyard-burgers.jpg?rev=1d66a7d15c324cdfa930e9d88e897010&vd=20200628T200653Z&hash=014FF8E922C77C6FA3CE60E6E19E1DF7",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "HomeGrownCookin BBQ",
        address: faker.address.streetAddress(),
        cuisine: "American",
        // rating: 6,
        // numberOfReviews:2,
        imgURL:"https://cdn.vox-cdn.com/thumbor/9kbPhnyVQLDU78VfJiBv3AJ0f0g=/0x0:1080x1080/1200x900/filters:focal(474x440:646x612)/cdn.vox-cdn.com/uploads/chorus_image/image/55558593/117162038_1188918198133321_938275152913273982_n.72.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        name: "Mickey's Diner",
        address: faker.address.streetAddress(),
        cuisine: "American",
        // rating: 7,
        // numberOfReviews:2,
        imgURL:"https://www.irishtimes.com/polopoly_fs/1.3553516.1530699903!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        name: "Mama's Cozy Kitchen",
        address: faker.address.streetAddress(),
        cuisine: "American",
        // rating: 9,
        // numberOfReviews:2,
        imgURL:"https://cdn4.creativecirclemedia.com/riverdalepress/original/20191025-152456-CommunityDiners-3.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
 {
        name: "Southern Soul",
        address: faker.address.streetAddress(),
        cuisine: "American",
        // rating: 6,
        // numberOfReviews:2,
        imgURL:"https://assets3.thrillist.com/v1/image/1241813/414x310/crop;jpeg_quality=65.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        name: "Kingston Krab",
        address: faker.address.streetAddress(),
        cuisine: "Jamaican",
        // rating: 7,
        // numberOfReviews:2,
        imgURL:"https://i.pinimg.com/originals/93/f3/86/93f386f1b92ea063f246881146722007.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
 {
        name: "Carribean Comforts",
        address: faker.address.streetAddress(),
        cuisine: "Jamaican",
        // rating: 11,
        // numberOfReviews:3,
        imgURL:"https://www.gannett-cdn.com/presto/2018/09/11/PNDN/9c97d154-1c42-478a-b6d1-66dbeb33c8e3-ISLAND_VYBZ_01_LEDE.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jerk and Jamrock",
        address: faker.address.streetAddress(),
        cuisine: "Jamaican",
        // rating: 6,
        // numberOfReviews:2,
        imgURL:"https://anitahendrieka.com/wp-content/uploads/2019/05/jerk-chicken-jamaica-1440x960.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        name: "Jamaican Juice Joint ",
        address: faker.address.streetAddress(),
        cuisine: "Jamaican",
        // rating: 5,
        // numberOfReviews:2,
        imgURL:"https://fivespicejc.com/wp-content/uploads/2019/01/JUICES.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        name: "Patties & Plantains",
        address: faker.address.streetAddress(),
        cuisine: "Jamaican",
        // rating: 9,
        // numberOfReviews:2,
        imgURL:"https://res.cloudinary.com/hksqkdlah/image/upload/SFS_JamaicanBeefPatties-125_hpwoeg.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Restaurants', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
