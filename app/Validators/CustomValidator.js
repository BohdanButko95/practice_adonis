const Validator = use('Validator');
const Database = use('Database');
const Type = use('App/Models/Type');

const existsFn = async (data, field, message, args, get) => {
  const value = get(data, field);

  if (!value) {
    return;
  }

  const [table, column] = args;
  const row = await Database.table(table)
    .where(column, value)
    .first();

  if (!row) {
    throw message;
  }
};

const attrsFn = async (data, field, message) => {
  const { type_id: typeId, attributes } = data;
  if (!attributes) {
    return;
  }
  const type = await Type.findOrFail(typeId);
  const { rows: typeAttrs } = await type.attributes().fetch();

  let fails = typeAttrs.length !== Object.keys(attributes).length;
  typeAttrs.forEach(typeAttr => {
    fails = fails || typeof attributes[typeAttr.id] === 'undefined';
  });

  if (fails) {
    throw message;
  }
};

Validator.extend('attrs', attrsFn);
Validator.extend('exists', existsFn);

class CustomValidator {
  async fails(errorMessages) {
    return this.ctx.response.json(errorMessages);
  }
}

module.exports = CustomValidator;
