const Prod = use('App/Models/Product');
const Database = use('Database');

class Product {
  static async getEntities({ type_id: typeId, name, owner_id: ownerId, price, created_at: createdAt }) {
    const filterByType = typeId || null;
    const filterByName = name || null;
    const filterByOwner = ownerId || null;
    const sortByPrice = ['asc', 'desc'].includes(price) ? price : null;
    const sortByDate = ['asc', 'desc'].includes(createdAt) ? createdAt : null;

    const query = Database.table('products');

    if (filterByType) {
      query.where('type_id', Number(filterByType));
    }
    if (filterByName) {
      query.where('name', 'LIKE', `%${filterByName}%`);
    }
    if (filterByOwner) {
      query.where('user_id', Number(filterByOwner));
    }
    if (sortByPrice) {
      query.orderBy('price', sortByPrice);
    }
    if (sortByDate) {
      query.orderBy('created_at', sortByDate);
    }

    return query;
  }

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
