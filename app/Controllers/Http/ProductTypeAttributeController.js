const ProductTypeAttribute = use('App/Models/ProductTypeAttribute');

class ProductTypeAttributeController {
  async index() {
    return ProductTypeAttribute.all();
  }

  async store({ request, response }) {
    return response.json(await ProductTypeAttribute.storeEntity(request.post()));
  }

  async show({ params }) {
    return ProductTypeAttribute.findOrFail(params.id);
  }

  async update({ params, request, response }) {
    return response.json(await ProductTypeAttribute.updateEntity(params.id, request.post()));
  }

  async destroy({ params, response }) {
    return response.json(await ProductTypeAttribute.deleteEntity(params.id));
  }
}

module.exports = ProductTypeAttributeController;
