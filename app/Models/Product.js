const Entity = require('./Entity');

class Product extends Entity {
  static get updatedAtColumn() {
    return null;
  }

  type() {
    return this.belongsTo('App/Models/Type');
  }

  user() {
    return this.belongsTo('App/Models/User');
  }

  attributes() {
    return this.belongsToMany('App/Models/Attribute')
      .pivotModel('App/Models/ProductAttribute')
      .withPivot(['value']);
  }
}

module.exports = Product;
