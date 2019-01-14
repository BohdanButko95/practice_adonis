const CustomValidator = use('App/Validators/CustomValidator');

class StoreProductAttribute extends CustomValidator {
  get rules() {
    return {
      value: 'required',
      attribute_id: 'required|exists:attributes,id'
    };
  }

  get messages() {
    return {
      'value.required': 'You must provide a value',
      'attribute_id.required': 'You must provide an attribute_id',
      'attribute_id.exists': "Provided attribute_id doesn't exists"
    };
  }
}

module.exports = StoreProductAttribute;
