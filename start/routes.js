const Route = use('Route');

Route.group(() => {
  Route.post('login', 'UserController.login');

  Route.resource('products/types', 'ProductTypeController').apiOnly();
  Route.resource('attributes', 'AttributeController').apiOnly();
  Route.resource('products', 'ProductController').apiOnly();
}).prefix('api/v1');
