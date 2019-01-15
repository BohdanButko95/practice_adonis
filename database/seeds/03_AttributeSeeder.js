const Factory = use('Factory');
const Attribute = use('App/Models/Attribute');
const Type = use('App/Models/Type');

class AttributeSeeder {
  async run() {
    await Attribute.query().delete();
    const types = await Type.all();
    const promiseTypes = [];

    types.rows.forEach(type => {
      promiseTypes.push(Factory.model('App/Models/Attribute').createMany(2, type));
    });

    await Promise.all(promiseTypes);
  }
}

module.exports = AttributeSeeder;
