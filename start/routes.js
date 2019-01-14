const Route = use('Route');

Route.group(() => {
  Route.post('login', 'UserController.login');
  Route.post('signup', 'UserController.signup');

  Route.get('attributes', 'AttributeController.index');
  Route.post('attributes', 'AttributeController.store');
  Route.get('attributes/:id', 'AttributeController.show');
  Route.put('attributes/:id', 'AttributeController.update');
  Route.patch('attributes/:id', 'AttributeController.update');
  Route.delete('attributes/:id', 'AttributeController.destroy');

  Route.get('products/types', 'ProductTypeController.index');
  Route.post('products/types', 'ProductTypeController.store');
  Route.get('products/types/:id', 'ProductTypeController.show');
  Route.put('products/types/:id', 'ProductTypeController.update');
  Route.patch('products/types/:id', 'ProductTypeController.update');
  Route.delete('products/types/:id', 'ProductTypeController.destroy');

  Route.get('products/types/:typeId/attributes', 'ProductTypeAttributeController.index');
  Route.post('products/types/:typeId/attributes', 'ProductTypeAttributeController.store');
  Route.get('products/types/:typeId/attributes/:attrId', 'ProductTypeAttributeController.show');
  Route.put('products/types/:typeId/attributes/:attrId', 'ProductTypeAttributeController.update');
  Route.patch('products/types/:typeId/attributes/:attrId', 'ProductTypeAttributeController.update');
  Route.delete('products/types/:typeId/attributes/:attrId', 'ProductTypeAttributeController.destroy');

  Route.get('products', 'ProductController.index');
  Route.post('products', 'ProductController.store');
  Route.get('products/:id', 'ProductController.show');
  Route.put('products/:id', 'ProductController.update');
  Route.patch('products/:id', 'ProductController.update');
  Route.delete('products/:id', 'ProductController.destroy');

  Route.get('products/:prodId/attributes', 'ProductAttributeController.index');
  Route.post('products/:prodId/attributes', 'ProductAttributeController.store');
  Route.get('products/:prodId/attributes/:attrId', 'ProductAttributeController.show');
  Route.put('products/:prodId/attributes/:attrId', 'ProductAttributeController.update');
  Route.patch('products/:prodId/attributes/:attrId', 'ProductAttributeController.update');
  Route.delete('products/:prodId/attributes/:attrId', 'ProductAttributeController.destroy');
}).prefix('api/v1');
