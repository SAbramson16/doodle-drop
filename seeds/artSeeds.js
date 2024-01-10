const { Art } = require('../models');

const artData = [
    {
        title: 'Cute Kitty',
        imageURL: 'https://img.freepik.com/free-vector/little-cute-cat-cartoon-character_1308-140198.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704153600&semt=ais',
        description: 'Cartoon image of cat',
        medium: 'Digital Paint',
    },
    {
        title: 'Cute Kitty',
        imageURL: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Frealismtoday.com%2Fstill-life-realism-getting-lost-in-the-process%2F&psig=AOvVaw2NKHlM-aDV6nhNQUisIoZW&ust=1704999895019000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNDB2oHC04MDFQAAAAAdAAAAABAD',
        description: 'Still Life Apples',
        medium: 'Oil Paints',
    },
]

const seedArt = () => Art.bulkCreate(artData);

module.exports = seedArt;
