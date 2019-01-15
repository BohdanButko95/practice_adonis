const Type = use('App/Models/Type');

class TypeController {
  async index({ response }) {
    return response.json(await Type.getEntities());
  }

  async show({ params, response }) {
    return response.json(await Type.getEntity(params.id));
  }

  async store({ request, response }) {
    return response.json(await Type.storeEntity(request.post()));
  }

  async update({ params, request, response }) {
    return response.json(await Type.updateEntity(params.id, request.post()));
  }

  async destroy({ params, response }) {
    return response.json(await Type.deleteEntity(params.id));
  }
}

module.exports = TypeController;
