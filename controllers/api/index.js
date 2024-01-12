const router = require('express').Router();
const categoryRoutes = require('./categoryRoutes');
const userRoutes = require('./userRoutes');
const artRoutes = require('./artRoutes');

router.use('/categories', categoryRoutes)
router.use('/users', userRoutes);
router.use('/art', artRoutes);

module.exports = router;
