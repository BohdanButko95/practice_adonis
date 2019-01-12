const ProdAttr = use('App/Models/ProductAttribute');
const Product = use('App/Models/Product');
const ProductTypeAttribute = use('App/Models/ProductTypeAttribute');

class ProductAttribute {
  static async storeEntity({ value, product_id: productId, attribute_id: attributeId }) {
    const product = await Product.findOrFail(productId);
    const type = await product.type().fetch();
    const prodTypeAttr = await ProductTypeAttribute.query()
      .where('product_type_id', type.id)
      .where('attribute_id', attributeId)
      .fetch();

    const prodAttr = new ProdAttr();
    prodAttr.value = value;
    prodAttr.product_id = productId;
    prodAttr.product_type_attribute_id = prodTypeAttr.rows[0].id;
    await prodAttr.save();

    return prodAttr;
  }

  static async updateEntity(id, { value, product_id: productId, attribute_id: attributeId }) {
    const product = await Product.findOrFail(productId);
    const type = await product.type().fetch();
    const prodTypeAttr = await ProductTypeAttribute.query()
      .where('product_type_id', type.id)
      .where('attribute_id', attributeId)
      .fetch();

    const prodAttr = await ProdAttr.findOrFail(id);
    prodAttr.value = value;
    prodAttr.product_id = productId;
    prodAttr.product_type_attribute_id = prodTypeAttr.rows[0].id;
    await prodAttr.save();

    return prodAttr;
  }

  static async deleteEntity(id) {
    const prodAttr = await ProdAttr.findOrFail(id);
    await prodAttr.delete();

    return { result: `ProductAttribute(ID: ${prodAttr.id}) was deleted'` };
  }
}

module.exports = ProductAttribute;
