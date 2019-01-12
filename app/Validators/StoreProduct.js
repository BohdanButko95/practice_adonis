// TODO: Extend validator: add 'exists'. Add 'exists' validation to type_id & user_id. Add validation to price
const CustomValidator = use('App/Validators/CustomValidator');

class StoreProduct extends CustomValidator {
  get rules() {
    return {
      name: 'required',
      price: 'required',
      type_id: 'required',
      user_id: 'required'
    };
  }

  get messages() {
    return {
      'name.required': 'You must provide a name',
      'price.required': 'You must provide a price',
      'type_id.required': 'You must provide a type_id',
      'user_id.required': 'You must provide a user_id'
    };
  }
}

module.exports = StoreProduct;
