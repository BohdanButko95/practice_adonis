const Model = use('Model');

class ProductAttribute extends Model {
  static boot() {
    super.boot();
    this.addTrait('App/Models/Traits/Repository');
  }

  productTypeAttribute() {
    return this.belongsTo('App/Models/ProductTypeAttribute');
  }

  product() {
    return this.belongsTo('App/Models/Product');
  }
}

module.exports = ProductAttribute;
