const Factory = use('Factory');

Factory.blueprint('App/Models/Attribute', async (faker, i, data) => ({
  name: faker.string({ length: 7 }),
  type_id: data.id
}));

Factory.blueprint('App/Models/Product', async (faker, i, data) => ({
  name: faker.string({ length: 7 }),
  price: faker.integer({ min: 200, max: 2000 }),
  user_id: data.user.id,
  type_id: data.type.id
}));

Factory.blueprint('App/Models/ProductAttribute', async (faker, i, data) => ({
  product_id: data.product.id,
  attribute_id: data.attribute.id,
  value: faker.string({ length: 7 })
}));
