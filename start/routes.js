const Route = use('Route');

Route.group(() => {
  Route.post('login', 'AuthController.login').middleware('guest');

  Route.get('types', 'TypeController.index');
  Route.get('types/:id', 'TypeController.show');
  Route.post('types', 'TypeController.store');
  Route.put('types/:id', 'TypeController.update');
  Route.delete('types/:id', 'TypeController.destroy');

  Route.get('types/:typeId/attributes/', 'AttributeController.index');
  Route.get('types/:typeId/attributes/:id', 'AttributeController.show');
  Route.post('types/:typeId/attributes/', 'AttributeController.store');
  Route.put('types/:typeId/attributes/:id', 'AttributeController.update');
  Route.delete('types/:typeId/attributes/:id', 'AttributeController.destroy');

  Route.get('products', 'ProductController.index');
  Route.get('products/:id', 'ProductController.show');
  Route.post('products', 'ProductController.store');
  Route.put('products/:id', 'ProductController.update');
  Route.delete('products/:id', 'ProductController.destroy');
}).prefix('api');
