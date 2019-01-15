const Product = use('App/Models/Product');

class ProductController {
  async index({ params, response }) {
    return response.json(await Product.getEntities(params));
  }

  async show({ params, response }) {
    return response.json(await Product.getEntity(params.id));
  }

  async store({ request, response }) {
    return response.json(await Product.storeEntity(request.post()));
  }

  async update({ params, request, response }) {
    return response.json(await Product.updateEntity(params.id, request.post()));
  }

  async destroy({ params, response }) {
    return response.json(await Product.deleteEntity(params.id));
  }
}

module.exports = ProductController;
