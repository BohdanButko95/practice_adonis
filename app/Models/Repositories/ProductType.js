const ProdType = use('App/Models/ProductType');

class ProductType {
  static async storeEntity({ name }) {
    const prodType = new ProdType();
    prodType.name = name;
    await prodType.save();

    return prodType;
  }

  static async updateEntity(id, { name }) {
    const prodType = await ProdType.findOrFail(id);
    prodType.name = name;
    await prodType.save();

    return prodType;
  }

  static async deleteEntity(id) {
    const prodType = await ProdType.findOrFail(id);
    await prodType.delete();

    return { result: `ProductType(ID: ${prodType.id}) was deleted'` };
  }
}

module.exports = ProductType;
