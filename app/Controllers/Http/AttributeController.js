const Attribute = use('App/Models/Attribute');

class AttributeController {
  async index() {
    return Attribute.all();
  }

  async store({ request, response }) {
    return response.json(await Attribute.storeEntity(request.post()));
  }

  async show({ params }) {
    return Attribute.findOrFail(params.id);
  }

  async update({ params, request, response }) {
    return response.json(await Attribute.updateEntity(params.id, request.post()));
  }

  async destroy({ params, response }) {
    return response.json(await Attribute.deleteEntity(params.id));
  }
}

module.exports = AttributeController;
