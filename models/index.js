const User = require('./User');
const Art = require('./Art');
const Category = require('./Category');
const Comment = require('./Comment');

User.hasMany(Art, {
    foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Category.hasMany(Art, {
    foreignKey: 'category_id',
});

Art.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
});

Art.belongsTo(User, {
    foreignKey:'user_id',
})

Art.hasMany(Comment, {
    foreignKey: 'art_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Art, {
    foreignKey: 'art_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

module.exports = {
    User,
    Art,
    Category,
    Comment,
};