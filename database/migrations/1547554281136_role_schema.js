const Schema = use('Schema');

class RoleSchema extends Schema {
  up() {
    this.create('roles', table => {
      table.increments();
      table
        .string('slug')
        .notNullable()
        .unique();
      table
        .string('name')
        .notNullable()
        .unique();
      table.text('description').nullable();
      table.timestamps();
    });

    this.create('role_user', table => {
      table.increments();
      table
        .integer('role_id')
        .unsigned()
        .index();
      table
        .foreign('role_id')
        .references('id')
        .on('roles')
        .onDelete('cascade');
      table
        .integer('user_id')
        .unsigned()
        .index();
      table
        .foreign('user_id')
        .references('id')
        .on('users')
        .onDelete('cascade');
      table.timestamps();
    });
  }

  down() {
    this.drop('role_user');
    this.drop('roles');
  }
}

module.exports = RoleSchema;
