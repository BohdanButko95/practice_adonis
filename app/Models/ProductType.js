const Model = use('Model');

class ProductType extends Model {
  static boot() {
    super.boot();
    this.addTrait('App/Models/Traits/Repository');
  }

  products() {
    return this.hasMany('App/Models/Product', 'id', 'type_id');
  }

  attributes() {
    return this.hasMany('App/Models/ProductTypeAttribute');
  }
}

module.exports = ProductType;
