const Type = use('App/Models/Type');

class TypeSeeder {
  async run() {
    await Type.query().delete();
    const types = [{ name: 'phone' }, { name: 'laptop' }];
    await Type.createMany(types);
  }
}

module.exports = TypeSeeder;
