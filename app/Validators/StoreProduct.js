const CustomValidator = use('App/Validators/CustomValidator');

class StoreProduct extends CustomValidator {
  get rules() {
    return {
      name: 'required',
      price: 'required',
      type_id: 'required|exists:product_types,id',
      user_id: 'required|exists:users,id'
    };
  }

  get messages() {
    return {
      'name.required': 'You must provide a name',
      'price.required': 'You must provide a price',
      'type_id.required': 'You must provide a type_id',
      'type_id.exists': "Provided type_id doesn't exists",
      'user_id.required': 'You must provide a user_id',
      'user_id.exists': "Provided user_id doesn't exists"
    };
  }
}

module.exports = StoreProduct;
