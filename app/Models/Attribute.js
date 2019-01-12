const Model = use('Model');

class Attribute extends Model {
  static boot() {
    super.boot();
    this.addTrait('App/Models/Traits/Repository');
  }

  productTypeAttributes() {
    return this.hasMany('App/Models/ProductTypeAttribute');
  }
}

module.exports = Attribute;
