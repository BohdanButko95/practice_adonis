const CustomValidator = use('App/Validators/CustomValidator');

class StoreProductAttribute extends CustomValidator {
  get rules() {
    return {
      value: 'required',
      product_id: 'required|exists:products,id',
      attribute_id: 'required|exists:attributes,id'
    };
  }

  get messages() {
    return {
      'value.required': 'You must provide a value',
      'product_id.required': 'You must provide a product_id',
      'product_id.exists': "Provided product_id doesn't exists",
      'attribute_id.required': 'You must provide an attribute_id',
      'attribute_id.exists': "Provided attribute_id doesn't exists"
    };
  }
}

module.exports = StoreProductAttribute;
