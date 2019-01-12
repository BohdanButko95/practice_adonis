const Schema = use('Schema');

class ProductTypeSchema extends Schema {
  up() {
    this.create('product_types', table => {
      table.increments();
      table
        .string('name')
        .notNullable()
        .unique();
      table.timestamps();
    });
  }

  down() {
    this.drop('product_types');
  }
}

module.exports = ProductTypeSchema;
