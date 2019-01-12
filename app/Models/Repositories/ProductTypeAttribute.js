const ProdTypeAttr = use('App/Models/ProductTypeAttribute');

class ProductTypeAttribute {
  static async storeEntity({ product_type_id: prodTypeId, attribute_id: attributeId }) {
    const prodTypeAttr = new ProdTypeAttr();
    prodTypeAttr.product_type_id = prodTypeId;
    prodTypeAttr.attribute_id = attributeId;
    await prodTypeAttr.save();

    return prodTypeAttr;
  }

  static async updateEntity(id, { product_type_id: prodTypeId, attribute_id: attributeId }) {
    const prodTypeAttr = await ProdTypeAttr.findOrFail(id);
    prodTypeAttr.product_type_id = prodTypeId;
    prodTypeAttr.attribute_id = attributeId;
    await prodTypeAttr.save();

    return prodTypeAttr;
  }

  static async deleteEntity(id) {
    const prodTypeAttr = await ProdTypeAttr.findOrFail(id);
    await prodTypeAttr.delete();

    return { result: `ProductTypeAttribute(ID: ${prodTypeAttr.id}) was deleted'` };
  }
}

module.exports = ProductTypeAttribute;
