const Factory = use('Factory');
const Product = use('App/Models/Product');
const Type = use('App/Models/Type');
const User = use('App/Models/User');

class ProductSeeder {
  async run() {
    await Product.query().delete();
    const users = await User.all();
    const types = await Type.all();
    const promiseProducts = [];

    users.rows.forEach(user => {
      types.rows.forEach(type => {
        const prms = Factory.model('App/Models/Product').create({ user, type });
        promiseProducts.push(prms);
      });
    });
    await Promise.all(promiseProducts);
  }
}

module.exports = ProductSeeder;
