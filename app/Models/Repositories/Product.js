const Prod = use('App/Models/Product');
const Database = use('Database');

class Product {
  static async getEntities({ typeId, name, ownerId, price, createdAt }) {
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

  static async getEntity(id) {
    return Prod.findOrFail(id);
  }

  static async storeEntity({ name, price, typeId, userId, attributes }) {
    const product = new Prod();
    product.fill({ name, price, type_id: typeId, user_id: userId });
    await product.save();

    const atrs = JSON.parse(attributes);
    const promiseProduct = [];
    Object.keys(atrs).forEach(atr => {
      const prms = product.attributes().attach(atr, row => {
        row.value = atrs[atr];
      });
      promiseProduct.push(prms);
    });
    await Promise.all(promiseProduct);

    return product;
  }

  static async updateEntity(id, { name, price, typeId, userId, attributes }) {
    const product = await Prod.findOrFail(id);
    product.merge({ name, price, type_id: typeId, user_id: userId });
    await product.save();

    const atrs = JSON.parse(attributes);
    const promiseProduct = [];
    Object.keys(atrs).forEach(atr => {
      const prms = product
        .attributes()
        .pivotQuery()
        .where('attribute_id', atr)
        .update({ value: atrs[atr] });
      promiseProduct.push(prms);
    });
    await Promise.all(promiseProduct);

    return product;
  }

  static async deleteEntity(id) {
    const product = await Prod.findOrFail(id);
    await product.delete();

    return { message: `Prode (ID: ${product.id}) was deleted` };
  }
}

module.exports = Product;
