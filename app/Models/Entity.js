const Model = use('Model');

class Entity extends Model {
  static boot() {
    super.boot();
    this.addTrait('App/Models/Traits/Repository');
  }
}

module.exports = Entity;
