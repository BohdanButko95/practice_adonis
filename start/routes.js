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

  Route.get('products/types/:type_id/attributes', 'ProductTypeAttributeController.index');
  Route.post('products/types/:type_id/attributes', 'ProductTypeAttributeController.store');
  Route.get('products/types/:type_id/attributes/:attr_id', 'ProductTypeAttributeController.show');
  Route.put('products/types/:type_id/attributes/:attr_id', 'ProductTypeAttributeController.update');
  Route.patch('products/types/:type_id/attributes/:attr_id', 'ProductTypeAttributeController.update');
  Route.delete('products/types/:type_id/attributes/:attr_id', 'ProductTypeAttributeController.destroy');

  Route.get('products', 'ProductController.index');
  Route.post('products', 'ProductController.store');
  Route.get('products/:id', 'ProductController.show');
  Route.put('products/:id', 'ProductController.update');
  Route.patch('products/:id', 'ProductController.update');
  Route.delete('products/:id', 'ProductController.destroy');

  Route.get('products/:prod_id/attributes', 'ProductAttributeController.index');
  Route.post('products/:prod_id/attributes', 'ProductAttributeController.store');
  Route.get('products/:prod_id/attributes/:attr_id', 'ProductAttributeController.show');
  Route.put('products/:prod_id/attributes/:attr_id', 'ProductAttributeController.update');
  Route.patch('products/:prod_id/attributes/:attr_id', 'ProductAttributeController.update');
  Route.delete('products/:prod_id/attributes/:attr_id', 'ProductAttributeController.destroy');
}).prefix('api/v1');
