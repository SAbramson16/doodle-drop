const { Art } = require('../models');

const artData = [
    {
        title: 'Sky',
        description: 'Beautiful sky',
        medium: 'Photograph',
        imageUrl: 'https://doodle-drop-images.s3.amazonaws.com/360_F_345034340_1ZWwYdR6S5rJaO6k1WaEVBG231mf95Z0.jpg-vector/little-cute-cat-cartoon-character_1308-140198.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704153600&semt=ais',
        user_id: 1,
        category_id: 1
    },
    {
        title: 'Apples',
        description: 'Snoopy',
        medium: 'Marker',
        imageUrl: 'https://doodle-drop-images.s3.amazonaws.com/snoopy.jpg',
        category_id: 2
    },
]

const seedArt = () => Art.bulkCreate(artData);

module.exports = seedArt;
