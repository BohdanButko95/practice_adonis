const Schema = use('Schema');

class AttributesSchema extends Schema {
  up() {
    this.create('attributes', table => {
      table.increments();
      table
        .string('name')
        .notNullable()
        .unique();
      table
        .integer('type_id')
        .notNullable()
        .index();
      table
        .foreign('type_id')
        .references('id')
        .on('types')
        .onDelete('cascade');
      table.timestamp('created_at').defaultTo(this.fn.now());
    });

    this.create('product_attributes', table => {
      table.increments();
      table
        .string('value')
        .notNullable(0)
        .default(0);
      table
        .integer('product_id')
        .notNullable()
        .index();
      table
        .foreign('product_id')
        .references('id')
        .on('products')
        .onDelete('cascade');
      table
        .integer('attribute_id')
        .notNullable()
        .index();
      table
        .foreign('attribute_id')
        .references('id')
        .on('attributes')
        .onDelete('cascade');
    });
  }

  down() {
    this.drop('product_attributes');
    this.drop('attributes');
  }
}

module.exports = AttributesSchema;
