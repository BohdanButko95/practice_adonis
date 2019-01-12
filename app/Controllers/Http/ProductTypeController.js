const ProductType = use('App/Models/ProductType');

class ProductTypeController {
  async index() {
    return ProductType.all();
  }

  async store({ request, response }) {
    return response.json(await ProductType.storeEntity(request.post()));
  }

  async show({ params }) {
    return ProductType.findOrFail(params.id);
  }

  async update({ params, request, response }) {
    return response.json(await ProductType.updateEntity(params.id, request.post()));
  }

  async destroy({ params, response }) {
    return response.json(await ProductType.deleteEntity(params.id));
  }
}

module.exports = ProductTypeController;
