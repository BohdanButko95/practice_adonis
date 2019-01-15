const Factory = use('Factory');
const Product = use('App/Models/Product');
const Attribute = use('App/Models/Attribute');
const ProductAttribute = use('App/Models/ProductAttribute');

class ProductAttributeSeeder {
  async run() {
    await ProductAttribute.query().delete();
    const products = await Product.all();
    const attributes = await Attribute.all();
    const promiseProductAttributes = [];

    products.rows.forEach(product => {
      attributes.rows.forEach(attribute => {
        if (product.type_id === attribute.type_id) {
          const prms = Factory.model('App/Models/ProductAttribute').create({ product, attribute });
          promiseProductAttributes.push(prms);
        }
      });
    });
    await Promise.all(promiseProductAttributes);
  }
}

module.exports = ProductAttributeSeeder;
