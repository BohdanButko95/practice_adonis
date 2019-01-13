const CustomValidator = use('App/Validators/CustomValidator');

class StoreProductTypeAttribute extends CustomValidator {
  get rules() {
    return {
      product_type_id: 'required|exists:product_types,id',
      attribute_id: 'required|exists:attributes,id'
    };
  }

  get messages() {
    return {
      'product_type_id.required': 'You must provide product_type_id',
      'product_type_id.exists': "Provided product_type_id doesn't exists",
      'attribute_id.required': 'You must provide attribute_id',
      'attribute_id.exists': "Provided attribute_id doesn't exists"
    };
  }
}

module.exports = StoreProductTypeAttribute;
