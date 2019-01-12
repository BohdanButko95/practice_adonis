const ProductAttribute = use('App/Models/ProductAttribute');

class ProductAttributeController {
  async index() {
    return ProductAttribute.all();
  }

  async store({ request, response }) {
    return response.json(await ProductAttribute.storeEntity(request.post()));
  }

  async show({ params }) {
    return ProductAttribute.findOrFail(params.id);
  }

  async update({ params, request, response }) {
    return response.json(await ProductAttribute.updateEntity(params.id, request.post()));
  }

  async destroy({ params, response }) {
    return response.json(await ProductAttribute.deleteEntity(params.id));
  }
}

module.exports = ProductAttributeController;
