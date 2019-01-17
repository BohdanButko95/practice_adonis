const CustomValidator = use('App/Validators/CustomValidator');

class StoreProduct extends CustomValidator {
  get rules() {
    return {
      typeId: 'required|exists:types,id',
      userId: 'required|exists:users:id',
      name: 'required',
      price: 'required',
      attributes: 'required'
    };
  }

  get messages() {
    return {
      'typeId.required': 'You must provide a typeId',
      'typeId.exists': "Provided typeId doesn't exists",
      'userId.required': 'You must provide a userId',
      'userId.exists': "Provided userId doesn't exists",
      'price.required': 'You must provide a price',
      'name.required': 'You must provide a name',
      'attributes.required': 'You must provide attributes',
      'attributes.attrs': 'Wrond set of attributes'
    };
  }
}

module.exports = StoreProduct;
