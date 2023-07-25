// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {

  // foreignKey relationship w/ category_id column to 'product' table/model
  foreignKey: 'category_id'
});

// Categories hasMany Products
Category.hasMany(Product, {

  // foreignKey relationship w/ category_id column to 'product' table/model
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,

  // foreignKey relationship w/ product_id column to 'product' table/model
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,

  // foreignKey relationship w/ tag_id column to 'tag' table/model
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
