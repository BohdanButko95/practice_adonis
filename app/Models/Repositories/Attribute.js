const Attr = use('App/Models/Attribute');
const Type = use('App/Models/Type');

class Attribute {
  static async getEntities(typeId) {
    const type = await Type.findOrFail(typeId);
    return type.attributes().fetch();
  }

  static async getEntity(typeId, id) {
    const type = await Type.findOrFail(typeId);
    return type
      .attributes()
      .where('id', id)
      .fetch();
  }

  static async storeEntity(typeId, { name }) {
    const attr = new Attr();
    attr.fill({ type_id: typeId, name });
    await attr.save();

    return attr;
  }

  static async updateEntity(typeId, id, { name }) {
    const type = await Type.findOrFail(typeId);
    const attr = type
      .attributes()
      .where('id', id)
      .fetch();
    attr.merge({ name });
    await attr.save();

    return attr;
  }

  static async deleteEntity(typeId, id) {
    const type = await Type.findOrFail(typeId);
    const attr = type
      .attributes()
      .where('id', id)
      .fetch();
    await attr.delete();

    return { message: `Attribute (ID: ${attr.id}) was deleted` };
  }
}

module.exports = Attribute;
