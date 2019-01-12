const Attr = use('App/Models/Attribute');

class Attribute {
  static async storeEntity({ name }) {
    const attr = new Attr();
    attr.name = name;
    await attr.save();

    return attr;
  }

  static async updateEntity(id, { name }) {
    const attr = await Attr.findOrFail(id);
    attr.name = name;
    await attr.save();

    return attr;
  }

  static async deleteEntity(id) {
    const attr = await Attr.findOrFail(id);
    await attr.delete();

    return { result: `Attribute(ID: ${attr.id}) was deleted'` };
  }
}

module.exports = Attribute;
