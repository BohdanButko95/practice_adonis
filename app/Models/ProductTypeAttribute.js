const Model = use('Model');

class ProductTypeAttribute extends Model {
  static boot() {
    super.boot();
    this.addTrait('App/Models/Traits/Repository');
  }

  attribute() {
    return this.belongsTo('App/Models/Attribute');
  }

  productType() {
    return this.belongsTo('App/Models/ProductType');
  }
}

module.exports = ProductTypeAttribute;
