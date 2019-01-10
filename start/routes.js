const Route = use('Route');

Route.group(() => {
  Route.post('login', 'UserController.login');

  Route.resource('attributes', 'AttributeController').apiOnly();
  Route.resource('products/types', 'ProductTypeController').apiOnly();
  Route.resource('products/types/:id/attributes', 'ProductTypeAttributeController').apiOnly();
  Route.resource('products', 'ProductController').apiOnly();
  Route.resource('products/:id/attributes', 'ProductAttributeController').apiOnly();
}).prefix('api/v1');
