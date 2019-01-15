const Model = use('Model');

class Product extends Model {
  static get updatedAtColumn() {
    return null;
  }

  type() {
    this.belongsTo('App/Models/Type');
  }

  user() {
    this.belongsTo('App/Models/User');
  }

  attributes() {
    this.belongsToMany('App/Models/Attribute').pivotModel('App/Models/ProductAttribute');
  }
}

module.exports = Product;
