const { Art } = require('../models');

const artData = [
    {
        title: 'Sky',
        description: 'Beautiful sky',
        medium: 'Photograph',
        imageUrl: 'https://doodle-drop-images.s3.amazonaws.com/360_F_345034340_1ZWwYdR6S5rJaO6k1WaEVBG231mf95Z0.jpg',
        user_id: 1,
        category_id: 2
    },
    {
        title: 'Snoopy',
        description: 'Snoopy',
        medium: 'Marker',
        imageUrl: 'https://doodle-drop-images.s3.amazonaws.com/snoopy.jpg',
        category_id: 1
    },
    {
        title: 'Camera',
        description: 'Sketch of camera',
        medium: 'Sketch',
        imageUrl: 'https://doodle-drop-images.s3.amazonaws.com/eye-sketch.avif',
        category_id: 5
    },
    {
        title: 'Color Splash',
        description: 'Abstract Splash of color',
        medium: 'Abstract',
        imageUrl: 'https://doodle-drop-images.s3.amazonaws.com/abstract-colorful-splash-3d-background-generative-ai-background_60438-2509.avif',
        category_id: 3
    },
    {
        title: 'Portrait',
        description: 'Digital Art Portrait',
        medium: 'Digital',
        imageUrl: 'https://doodle-drop-images.s3.amazonaws.com/digital+art+portrait.jpeg',
        category_id: 4
    },

    ]

const seedArt = () => Art.bulkCreate(artData);

module.exports = seedArt;
