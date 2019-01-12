const ProductTypeAttribute = use('App/Models/ProductTypeAttribute');
const ProductType = use('App/Models/ProductType');
const Attribute = use('App/Models/Attribute');

class ProductTypeAttributeSeeder {
  async run() {
    await ProductTypeAttribute.query().delete();

    const attributes = await Attribute.pair('name', 'id');
    const productTypes = await ProductType.pair('name', 'id');

    const productTypeAttributes = [
      { product_type_id: productTypes.phone, attribute_id: attributes.display },
      { product_type_id: productTypes.phone, attribute_id: attributes.wifi },
      { product_type_id: productTypes.phone, attribute_id: attributes.touchId },
      { product_type_id: productTypes.phone, attribute_id: attributes.faceId }
    ];

    await ProductTypeAttribute.createMany(productTypeAttributes);
  }
}

module.exports = ProductTypeAttributeSeeder;
