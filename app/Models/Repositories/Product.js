const Prod = use('App/Models/Product');

class Product {
  static async storeEntity({ name, price, type_id: typeId, user_id: userId }) {
    const product = new Prod();
    product.name = name;
    product.price = price;
    product.type_id = typeId;
    product.user_id = userId;
    product.save();

    return product;
  }

  static async updateEntity(id, { name, price, type_id: typeId, user_id: userId }) {
    const product = await Prod.findOrFail(id);
    product.name = name;
    product.price = price;
    product.type_id = typeId;
    product.user_id = userId;
    product.save();

    return product;
  }

  static async deleteEntity(id) {
    const product = await Prod.findOrFail(id);
    await product.delete();

    return { result: `Product(ID: ${product.id}) was deleted'` };
  }
}

module.exports = Product;
