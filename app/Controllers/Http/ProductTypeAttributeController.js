const ProductTypeAttribute = use('App/Models/ProductTypeAttribute');

class ProductTypeAttributeController {
  async index({ params, response }) {
    return response.json(await ProductTypeAttribute.getEntities(params.typeId));
  }

  async store({ params, request, response }) {
    return response.json(await ProductTypeAttribute.storeEntity(params.typeId, request.post()));
  }

  async show({ params, response }) {
    return response.json(await ProductTypeAttribute.getEntity(params.attrId));
  }

  async update({ params, request, response }) {
    return response.json(await ProductTypeAttribute.updateEntity(params.attrId, request.post()));
  }

  async destroy({ params, response }) {
    return response.json(await ProductTypeAttribute.deleteEntity(params.attrId));
  }
}

module.exports = ProductTypeAttributeController;
