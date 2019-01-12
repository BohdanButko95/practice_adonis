const Product = use('App/Models/Product');
const ProductType = use('App/Models/ProductType');
const User = use('App/Models/User');

class ProductSeeder {
  async run() {
    await Product.query().delete();

    const productTypes = await ProductType.pair('name', 'id');
    const users = await User.pair('username', 'id');

    const products = [
      { name: 'iPhone XS', price: 1299.99, type_id: productTypes.phone, user_id: users.admin },
      { name: 'iPhone X', price: 999.99, type_id: productTypes.phone, user_id: users.admin },
      { name: 'MacBook Air', price: 1199.99, type_id: productTypes.laptop, user_id: users.admin },
      { name: 'MacBook Pro', price: 1499.99, type_id: productTypes.laptop, user_id: users.admin },
      { name: 'Apple Watch S1', price: 899.99, type_id: productTypes.watch, user_id: users.admin }
    ];

    await Product.createMany(products);
  }
}

module.exports = ProductSeeder;
