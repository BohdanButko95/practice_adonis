const Attribute = use('App/Models/Attribute');

class AttributeController {
  async index({ params, response }) {
    return response.json(await Attribute.getEntities(params.typeId));
  }

  async show({ params, response }) {
    return response.json(await Attribute.getEntity(params.typeId, params.id));
  }

  async store({ params, request, response }) {
    return response.json(await Attribute.storeEntity(params.typeId, request.post()));
  }

  async update({ params, request, response }) {
    return response.json(await Attribute.updateEntity(params.typeId, params.id, request.post()));
  }

  async destroy({ params, response }) {
    return response.json(await Attribute.deleteEntity(params.typeId, params.id));
  }
}

module.exports = AttributeController;
