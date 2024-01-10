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
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fcamera_5904483&psig=AOvVaw00PHGoAd1X_GovF-jjZdZo&ust=1705000670662000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCODlsOHE04MDFQAAAAAdAAAAABBC',
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
    medium: {
        type: DataTypes.STRING,
        allowNull: false,
    },
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
