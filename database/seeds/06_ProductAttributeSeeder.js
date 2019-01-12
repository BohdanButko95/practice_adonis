const ProductAttribute = use('App/Models/ProductAttribute');
const Product = use('App/Models/Product');
const Attribute = use('App/Models/Attribute');
const ProductTypeAttribute = use('App/Models/ProductTypeAttribute');

class ProductAttributeSeeder {
  async run() {
    await ProductAttribute.query().delete();

    const attributes = await Attribute.pair('name', 'id');
    const phone = await Product.findByOrFail('name', 'iPhone X');

    const ptaDisplay = await ProductTypeAttribute.query()
      .where('product_type_id', '=', phone.type_id)
      .where('attribute_id', '=', attributes.display)
      .fetch();

    const ptaWifi = await ProductTypeAttribute.query()
      .where('product_type_id', '=', phone.type_id)
      .where('attribute_id', '=', attributes.wifi)
      .fetch();

    const ptaTouchId = await ProductTypeAttribute.query()
      .where('product_type_id', '=', phone.type_id)
      .where('attribute_id', '=', attributes.touchId)
      .fetch();

    const ptaFaceId = await ProductTypeAttribute.query()
      .where('product_type_id', '=', phone.type_id)
      .where('attribute_id', '=', attributes.faceId)
      .fetch();

    const productAttributes = [
      { value: '5.8', product_id: phone.id, product_type_attribute_id: ptaDisplay.rows[0].id },
      { value: 'yes', product_id: phone.id, product_type_attribute_id: ptaWifi.rows[0].id },
      { value: 'no', product_id: phone.id, product_type_attribute_id: ptaTouchId.rows[0].id },
      { value: 'yes', product_id: phone.id, product_type_attribute_id: ptaFaceId.rows[0].id }
    ];

    await ProductAttribute.createMany(productAttributes);
  }
}

module.exports = ProductAttributeSeeder;
