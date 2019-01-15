const Model = use('Model');

class Product extends Model {
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
    return this.belongsToMany('App/Models/Attribute').pivotModel('App/Models/ProductAttribute');
  }
}

module.exports = Product;
