const Product = use('App/Models/Product');

class ProductController {
  async index({ request, response }) {
    return response.json(await Product.getEntities(request.all()));
  }

  async store({ request, response }) {
    return response.json(await Product.storeEntity(request.post()));
  }

  async show({ params }) {
    return Product.findOrFail(params.id);
  }

  async update({ params, request, response }) {
    return response.json(await Product.updateEntity(params.id, request.post()));
  }

  async destroy({ params, response }) {
    return response.json(await Product.deleteEntity(params.id));
  }
}

module.exports = ProductController;
