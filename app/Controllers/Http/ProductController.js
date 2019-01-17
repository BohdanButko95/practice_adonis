const Product = use('App/Models/Product');

class ProductController {
  async index({ request }) {
    return Product.getEntities(request.all());
  }

  async show({ params }) {
    return Product.getEntity(params.id);
  }

  async store({ request, response }) {
    response.status(201);
    return Product.storeEntity(request.post());
  }

  async update({ params, request }) {
    return Product.updateEntity(params.id, request.post());
  }

  async destroy({ params, response }) {
    await Product.deleteEntity(params.id);
    return response.status(204).send();
  }
}

module.exports = ProductController;
