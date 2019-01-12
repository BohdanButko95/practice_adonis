const Model = use('Model');

class Product extends Model {
  static boot() {
    super.boot();
    this.addTrait('App/Models/Traits/Repository');
  }

  type() {
    return this.belongsTo('App/Models/ProductType', 'type_id', 'id');
  }

  user() {
    return this.belongsTo('App/Models/User');
  }

  attributes() {
    return this.hasMany('App/Models/ProductAttribute');
  }
}

module.exports = Product;
