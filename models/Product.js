// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    // product id column for product table
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

    // product_name column for product table
    product_name: {

      // Takes in Strings
      type: DataTypes.STRING,

      // // Cannot take in Null Values
      allowNull: false
    },

    // price column for product table
    price: {

      // Takes in Decimals
      type: DataTypes.DECIMAL,

      // Cannot take in Null Values
      allowNull: false,

      // Validates if Decimal Value is true
      validate: {
        isDecimal: true
      }
    },

    // stock column for product table
    stock: {

      // Takes in Integers
      type: DataTypes.INTEGER,

      // Cannot take in Null Values
      allowNull: false,

      // Sets a default value of 10
      defaultValue: 10,

      // Validates Integer Value to Numeric is true
      validate: {
        isNumeric: true
      }
    },

    // category_id column for product table
    category_id: {

      // Takes in Integers
      type: DataTypes.INTEGER,

      // References category tables id
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
