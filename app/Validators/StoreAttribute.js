const CustomValidator = use('App/Validators/CustomValidator');

class StoreAttribute extends CustomValidator {
  get rules() {
    return {
      name: 'required|unique:attributes,name'
    };
  }

  get messages() {
    return {
      'name.required': 'You must provide an attribute name.',
      'name.unique': 'Attribute already exists.'
    };
  }
}

module.exports = StoreAttribute;
