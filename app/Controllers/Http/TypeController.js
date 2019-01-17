const Type = use('App/Models/Type');

class TypeController {
  async index() {
    return Type.getEntities();
  }

  async show({ params }) {
    return Type.getEntity(params.id);
  }

  async store({ request, response }) {
    response.status(201);
    return Type.storeEntity(request.post());
  }

  async update({ params, request }) {
    return Type.updateEntity(params.id, request.post());
  }

  async destroy({ params, response }) {
    await Type.deleteEntity(params.id);
    return response.status(204).send();
  }
}

module.exports = TypeController;
