const ProdAttr = use('App/Models/ProductAttribute');
const Product = use('App/Models/Product');
const ProductTypeAttribute = use('App/Models/ProductTypeAttribute');

class ProductAttribute {
  static async getEntities(prodId) {
    return ProdAttr.query()
      .where('product_id', prodId)
      .fetch();
  }

  static async getEntity(attrId) {
    return ProdAttr.findOrFail(attrId);
  }

  static async storeEntity(prodId, { value, attribute_id: attributeId }) {
    const product = await Product.findOrFail(prodId);
    const type = await product.type().first();
    const prodTypeAttr = await ProductTypeAttribute.query()
      .where('product_type_id', type.id)
      .where('attribute_id', attributeId)
      .first();

    const prodAttr = new ProdAttr();
    prodAttr.value = value;
    prodAttr.product_id = Number(prodId);
    prodAttr.product_type_attribute_id = prodTypeAttr.id;
    prodAttr.save();

    return prodAttr;
  }

  static async updateEntity(attrId, { value }) {
    const prodAttr = await ProdAttr.findOrFail(attrId);
    prodAttr.value = value;
    prodAttr.save();
    return prodAttr;
  }

  static async deleteEntity(attrId) {
    const prodAttr = await ProdAttr.findOrFail(attrId);
    await prodAttr.delete();

    return { result: `ProductAttribute(ID: ${prodAttr.id}) was deleted'` };
  }
}

module.exports = ProductAttribute;
