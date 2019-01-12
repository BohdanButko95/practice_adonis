const Schema = use('Schema');

class ProductTypeAttributesSchema extends Schema {
  up() {
    this.create('product_type_attributes', table => {
      table.increments();
      table
        .integer('product_type_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('product_types')
        .onDelete('CASCADE')
        .index();
      table
        .integer('attribute_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('attributes')
        .onDelete('CASCADE')
        .index();
      table.timestamps();
    });
  }

  down() {
    this.drop('product_type_attributes');
  }
}

module.exports = ProductTypeAttributesSchema;
