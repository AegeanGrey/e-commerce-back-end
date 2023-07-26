const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    // tag id column for tag table
    id: {

      // Takes in Integers
      type: DataTypes.INTEGER,

      // Cannot take in Null Values
      allowNull: false, 

      // Is a Primary Key
      primaryKey: true,

      // Allows Auto Increment
      autoIncrement: true
    },

    // tag_name column for tag table
    tag_name: {

      // Takes in Strings
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
