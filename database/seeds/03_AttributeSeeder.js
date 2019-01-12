const Attribute = use('App/Models/Attribute');

class AttributeSeeder {
  async run() {
    await Attribute.query().delete();

    const attributes = [{ name: 'display' }, { name: 'wifi' }, { name: 'faceId' }, { name: 'touchId' }];

    await Attribute.createMany(attributes);
  }
}

module.exports = AttributeSeeder;
