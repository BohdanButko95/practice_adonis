// TODO: Add validation on unique combination of product_type_id & attribute_id
const CustomValidator = use('App/Validators/CustomValidator');

class StoreProductTypeAttribute extends CustomValidator {
  get rules() {
    return {
      product_type_id: 'required',
      attribute_id: 'required'
    };
  }

  get messages() {
    return {
      'product_type_id.required': 'You must provide product_type_id',
      'attribute_id.required': 'You must provide attribute_id'
      // 'product_type_id.unique': 'Pair [ product_type_id : attribute_id ] already exists.'
    };
  }
}

module.exports = StoreProductTypeAttribute;
