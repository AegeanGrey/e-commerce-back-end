const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    // category id column for category table
    id: {

      // Takes in Integers
      type: DataTypes.INTEGER,

      // Cannot take in Null Values
      allowNull: false,

      // Is a Primary Key
      primaryKey: true,

      // Does Auto Increment
      autoIncrement: true
    },

    // category_name column for category table
    category_name: {

      // Takes in Strings
      type: DataTypes.STRING,

      // Cannot take in Null Values
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
