const Attribute = use('App/Models/Attribute');

class AttributeController {
  async index({ params }) {
    return Attribute.getEntities(params.typeId);
  }

  async show({ params }) {
    return Attribute.getEntity(params.typeId, params.id);
  }

  async store({ params, request, response }) {
    response.status(201);
    return Attribute.storeEntity(params.typeId, request.post());
  }

  async update({ params, request }) {
    return Attribute.updateEntity(params.typeId, params.id, request.post());
  }

  async destroy({ params, response }) {
    await Attribute.deleteEntity(params.typeId, params.id);
    return response.status(204).send();
  }
}

module.exports = AttributeController;
