const User = require('./User');
const Art = require('./Art');
const Category = require('./Category');

User.hasMany(Art, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'
});

Category.hasMany(Art, {
    foreignKey: 'category_id',
});

Art.belongsTo(Category, {
    foreignKey: 'category_id',
});

module.exports = {
    User,
    Art,
    Category,
};