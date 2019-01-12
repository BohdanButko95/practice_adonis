const ProductType = use('App/Models/ProductType');

class ProductTypeSeeder {
  async run() {
    await ProductType.query().delete();

    const productTypes = [{ name: 'phone' }, { name: 'laptop' }, { name: 'watch' }];

    await ProductType.createMany(productTypes);
  }
}

module.exports = ProductTypeSeeder;
