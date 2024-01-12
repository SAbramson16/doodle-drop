const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Art extends Model {}

Art.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    medium: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'www.placekitten.com',
      validate: {
        isUrl: true
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'art',
  }
);

module.exports = Art;
