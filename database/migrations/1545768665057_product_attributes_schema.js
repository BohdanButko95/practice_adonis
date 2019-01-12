const Schema = use('Schema');

class ProductAttributesSchema extends Schema {
  up() {
    this.create('product_attributes', table => {
      table.increments();
      table.string('value').notNullable();
      table
        .integer('product_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('products')
        .onDelete('CASCADE')
        .index();
      table
        .integer('product_type_attribute_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('product_type_attributes')
        .onDelete('CASCADE')
        .index();
      table.timestamps();
    });
  }

  down() {
    this.drop('product_attributes');
  }
}

module.exports = ProductAttributesSchema;
