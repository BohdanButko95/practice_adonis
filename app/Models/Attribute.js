const Entity = require('./Entity');

class Attribute extends Entity {
  static get updatedAtColumn() {
    return null;
  }

  type() {
    return this.belongsTo('App/Models/Type');
  }
}

module.exports = Attribute;
