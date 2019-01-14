const CustomValidator = use('App/Validators/CustomValidator');

class StoreProductTypeAttribute extends CustomValidator {
  get rules() {
    return {
      attribute_id: 'required|exists:attributes,id|test'
    };
  }

  get messages() {
    return {
      'attribute_id.required': 'You must provide an attribute_id',
      'attribute_id.exists': "Provided attribute_id doesn't exists"
    };
  }
}

module.exports = StoreProductTypeAttribute;
