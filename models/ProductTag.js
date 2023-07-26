const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    // ProductTag id column for productTag table
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

    // product_id column for productTag table
    product_id: {

      // Takes in Integers
      type: DataTypes.INTEGER,

      // product_id column references the product tables id
      references: {
        model: 'product',
        key: 'id'
      }
    },

    // tag_id column for productTag table
    tag_id: {

      // Takes in Integers
      type: DataTypes.INTEGER,

      // tag_id column references the tag tables id
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
