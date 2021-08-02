'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reviews', [
        {
          rating:5 ,
          text:"Best food in town!",
          userId:2 ,
          restaurantId:1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
           {
          rating:5 ,
          text:"Great atmosphere, and the food was even better!",
          userId:2 ,
          restaurantId:2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
            {
          rating:5 ,
          text:"If words couls describe how good the food was, I'd write a novel",
          userId:2 ,
          restaurantId:19,
          createdAt: new Date(),
          updatedAt: new Date()
        },
         {
          rating:5 ,
          text:"Cant wait to come back woth my friends, and show them this spot!!",
          userId:2 ,
          restaurantId:20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
         {
          rating:5 ,
          text:"Absolutely a new go-to place in town!",
          userId:2 ,
          restaurantId:9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
         {
          rating:5 ,
          text:"The owners really make you feel like you're part of the family!",
          userId:2 ,
          restaurantId:15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
         {
          rating:5 ,
          text:"Great, Great, Great!!!",
          userId:2 ,
          restaurantId:12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
         {
          rating:5 ,
          text:"Coming here was the highlight of my week!",
          userId:2 ,
          restaurantId:8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
         {
          rating:4 ,
          text:"Food was excellent, but the service was a bit slow.",
          userId:3 ,
          restaurantId:3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
         {
          rating:4 ,
          text:"A little bland, but the service was fantastic!",
          userId:3 ,
          restaurantId:4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
         {
          rating:4 ,
          text:"Loved the over all fell of this place, going to come back soon!",
          userId:3 ,
          restaurantId:22,
          createdAt: new Date(),
          updatedAt: new Date()
        },

         {
          rating:4 ,
          text:"Gotta come check this place out!",
          userId:3 ,
          restaurantId:7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:"Really great food! Service wasnt the best, but they're trying their best!",
          userId:3 ,
          restaurantId:19,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:"Coming back soon, cant give a 5 on the first try ;)",
          userId:3 ,
          restaurantId:21,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:"So close to being perfect!!",
          userId:3 ,
          restaurantId:23,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:"Bringing my family next week to try this place out!",
          userId:3 ,
          restaurantId:25,
          createdAt: new Date(),
          updatedAt: new Date()
        },
         {
          rating:3 ,
          text:"Food was okay, and the service wasnt much better. Pretty average if you ask me.",
          userId:4 ,
          restaurantId:5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
{
          rating:3 ,
          text:"Was a bit down, because thier ads were so good!",
          userId:4 ,
          restaurantId:6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:3 ,
          text:"Service was really slow, but the food was excellent!",
          userId:4 ,
          restaurantId:22,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:3 ,
          text:"It's okay if you're in the mood for it, but nothing to write home about.",
          userId:4 ,
          restaurantId:21,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:3 ,
          text:"I remember this place being one of the best in town, now not so much.",
          userId:4 ,
          restaurantId:10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:3 ,
          text:"Food was starting to get cold when it got to us, it tasted fine so it passes but barely.",
          userId:4 ,
          restaurantId:16,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:3 ,
          text:"Just okay all round. Food, atmosphere, and the service were just okay.",
          userId:4 ,
          restaurantId:18,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:2 ,
          text:"Man what happened to this place, came here not too long ago and it was poppin. Now its just eh.",
          userId:5 ,
          restaurantId:7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
         {
          rating:2 ,
          text:"Knew the owners way back when, dont know how this place fell off.",
          userId:5 ,
          restaurantId:8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
         {
          rating:2 ,
          text:"Food was cold, and the service was horrible.",
          userId:5 ,
          restaurantId:23,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:2 ,
          text:"This place really went down hill and fast. Really sad to see i use to love this place.",
          userId:5 ,
          restaurantId:11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:2 ,
          text:"Couldnt wait to get out of there.",
          userId:5 ,
          restaurantId:15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:2 ,
          text:"Food wasnt too bad, but the service looked like they'd rather be literally anywhere else but there.",
          userId:5 ,
          restaurantId: 17,
          createdAt: new Date(),
          updatedAt: new Date()
        },

         {
          rating:1 ,
          text:"Wanted to spit my food in the trash it was awful! Never eating here again.",
          userId:6 ,
          restaurantId:9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:1 ,
          text:"I could cook this food better with my eyes closed, did they even try?!?!",
          userId:6 ,
          restaurantId:10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:1 ,
          text:"The owner is horrible and it shows in the food :(",
          userId:6 ,
          restaurantId:24,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:1 ,
          text:"New owners, same crappy food.",
          userId:6 ,
          restaurantId:14,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:1 ,
          text:"Who let the food get this bad, and dont even get me started on our server!",
          userId:6 ,
          restaurantId:12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:1 ,
          text:"Service was the worst in town. Didnt leave a tip and neither should you!!",
          userId:6 ,
          restaurantId:20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:5 ,
          text:"What can I say? They absolutely hit a home run tonight! Cant wait to come back!",
          userId:7 ,
          restaurantId:11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
         {
          rating:5 ,
          text:"New decor, and a new spirit the venue! Absolutely stunning!",
          userId:7 ,
          restaurantId:12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:5 ,
          text:"Cant wait to come back!! The owners really are the best!",
          userId:7 ,
          restaurantId:25,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:5 ,
          text:"Loved the service and the food! Our server was the bomb dot com!",
          userId:7 ,
          restaurantId:7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:5 ,
          text:"Who knew this little place packed a big puch! Keep up the great work!",
          userId:7 ,
          restaurantId:9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:5 ,
          text:"Woohoo!!! Absolutley the next big thing in town!!",
          userId:7 ,
          restaurantId:13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:"Food was great, very busy tho!",
          userId:8 ,
          restaurantId:13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:"A bit too spicy for me, but I cant wait to come back!",
          userId:8 ,
          restaurantId:14,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:"So close to that 5 mark, maybe next time!",
          userId:8 ,
          restaurantId:8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:"Some of the best people I ever met!",
          userId:8 ,
          restaurantId:6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:"Service was a bit slow, but the food made up for it!!",
          userId:8 ,
          restaurantId:22,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:3 ,
          text:"Food was okay, but our server was a real treat!!",
          userId:9 ,
          restaurantId:15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:3 ,
          text:"The venue seemed really out dated but the food, and service were fantastic!!",
          userId:9 ,
          restaurantId:16,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:3 ,
          text:"Food wasnt as good as it usually was, maybe it was an off night?",
          userId:9 ,
          restaurantId:1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:3 ,
          text:"Server looked really out of it! Food was okay too.",
          userId:9 ,
          restaurantId:3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:3 ,
          text:"Food wasnt as good as the decorum, but it was a nice experience.",
          userId:9 ,
          restaurantId:5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:"We had a really great experience, even with a large party our server really seemed thrilled to be there!",
          userId:10 ,
          restaurantId:17,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:"Food was some of the best I ever had!",
          userId:10 ,
          restaurantId:18,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:"The kids really seemed to have a good time, and the food wasnt half bad!",
          userId:10 ,
          restaurantId:2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:"Cant wait to come back and try the rest of the menu!",
          userId:10 ,
          restaurantId:4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating:4 ,
          text:"The only thing keeping me from giving this a 5 is a kids menu for the kiddos, but other than that it was great!!",
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
