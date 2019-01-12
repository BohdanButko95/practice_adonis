const CustomValidator = use('App/Validators/CustomValidator');

class StoreProductType extends CustomValidator {
  get rules() {
    return {
      name: 'required|unique:product_types,name'
    };
  }

  get messages() {
    return {
      'name.required': 'You must provide a product type name.',
      'name.unique': 'Product type already exists.'
    };
  }
}

module.exports = StoreProductType;
