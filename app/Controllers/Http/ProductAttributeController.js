const ProductAttribute = use('App/Models/ProductAttribute');

class ProductAttributeController {
  async index({ params, response }) {
    return response.json(await ProductAttribute.getEntities(params.prodId));
  }

  async store({ params, request, response }) {
    return response.json(await ProductAttribute.storeEntity(params.prodId, request.post()));
  }

  async show({ params, response }) {
    return response.json(await ProductAttribute.getEntity(params.attrId));
  }

  async update({ params, request, response }) {
    return response.json(await ProductAttribute.updateEntity(params.attrId, request.post()));
  }

  async destroy({ params, response }) {
    return response.json(await ProductAttribute.deleteEntity(params.attrId));
  }
}

module.exports = ProductAttributeController;
