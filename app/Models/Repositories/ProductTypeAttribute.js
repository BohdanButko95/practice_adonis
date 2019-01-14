const ProdTypeAttr = use('App/Models/ProductTypeAttribute');

class ProductTypeAttribute {
  static async getEntities(typeId) {
    return ProdTypeAttr.query()
      .where('product_type_id', typeId)
      .fetch();
  }

  static async getEntity(attrId) {
    return ProdTypeAttr.findOrFail(attrId);
  }

  static async storeEntity(typeId, { attribute_id: attributeId }) {
    const prodTypeAttr = new ProdTypeAttr();
    prodTypeAttr.product_type_id = Number(typeId);
    prodTypeAttr.attribute_id = Number(attributeId);
    await prodTypeAttr.save();

    return prodTypeAttr;
  }

  static async updateEntity(attrId, { attribute_id: attributeId }) {
    const prodTypeAttr = await ProductTypeAttribute.findOrFail(attrId);
    prodTypeAttr.attribute_id = Number(attributeId);
    prodTypeAttr.save();

    return prodTypeAttr;
  }

  static async deleteEntity(attrId) {
    const prodTypeAttr = await ProdTypeAttr.findOrFail(attrId);
    await prodTypeAttr.delete();

    return { result: `ProductTypeAttribute(ID: ${prodTypeAttr.id}) was deleted'` };
  }
}

module.exports = ProductTypeAttribute;
