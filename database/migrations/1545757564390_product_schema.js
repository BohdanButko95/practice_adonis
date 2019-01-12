const Schema = use('Schema');

class ProductSchema extends Schema {
  up() {
    this.create('products', table => {
      table.increments();
      table.string('name').notNullable();
      table
        .decimal('price')
        .notNullable()
        .default(0);
      table
        .integer('type_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('product_types')
        .onDelete('CASCADE')
        .index();
      table
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .index();
      table.timestamps();
    });
  }

  down() {
    this.drop('products');
  }
}

module.exports = ProductSchema;
