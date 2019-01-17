const Prod = use('App/Models/Product');

class Product {
  static async getEntities({ filters = null, order = 'id', sort = 'desc' }) {
    const filterFields = ['name', 'type_id', 'user_id'];

    return this.query()
      .where(function() { //eslint-disable-line
        if (filters && typeof filters === 'object') {
          Object.keys(filters).map(field => { //eslint-disable-line
            if (filterFields.includes(field)) {
              this.where(field, filters[field]);
            }
          });
        }
      })
      .orderBy(order, sort)
      .fetch();
  }

  static async getEntity(id) {
    return this.findOrFail(id);
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

    return { message: `Product (ID: ${product.id}) was deleted` };
  }
}

module.exports = Product;
