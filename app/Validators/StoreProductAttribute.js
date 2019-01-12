// TODO: Extend validator: add 'exists'. Add 'exists' validation to product_id & product_type_attribute_id
const CustomValidator = use('App/Validators/CustomValidator');

class StoreProductAttribute extends CustomValidator {
  get rules() {
    return {
      value: 'required',
      product_id: 'required',
      product_type_attribute_id: 'required'
    };
  }

  get messages() {
    return {
      'value.required': 'You must provide a value',
      'product_id.required': 'You must provide a product_id',
      'product_type_attribute_id.required': 'You must provide a product_type_attribute_id'
    };
  }
}

module.exports = StoreProductAttribute;
