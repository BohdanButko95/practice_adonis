const Model = use('Model');

class ProductAttribute extends Model {
  static get updatedAtColumn() {
    return null;
  }

  static get createdAtColumn() {
    return null;
  }

  attribute() {
    return this.belongsTo('App/Models/Attribute');
  }

  product() {
    return this.belongsTo('App/Models/Product');
  }
}

module.exports = ProductAttribute;
