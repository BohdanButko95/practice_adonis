const Typ = use('App/Models/Type');

class Type {
  static async getEntities() {
    return Typ.all();
  }

  static async getEntity(id) {
    return Typ.findOrFail(id);
  }

  static async storeEntity({ name }) {
    const type = new Typ();
    type.fill({ name });
    await type.save();

    return type;
  }

  static async updateEntity(id, { name }) {
    const type = await Typ.findOrFail(id);
    type.merge({ name });
    await type.save();

    return type;
  }

  static async deleteEntity(id) {
    const type = await Typ.findOrFail(id);
    await type.delete();

    return { message: `Type (ID: ${type.id}) was deleted` };
  }
}

module.exports = Type;
