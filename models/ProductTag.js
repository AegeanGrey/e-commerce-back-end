const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    // ProductTag id column
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

    // product_id column
    product_id: {

      // Takes in Integers
      type: DataTypes.INTEGER,

      // 
      references: {
        model: 'product',
        key: 'id'
      }
    },

    // tag_id column
    tag_id: {

      // Takes in Integers
      type: DataTypes.INTEGER,

      // 
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
