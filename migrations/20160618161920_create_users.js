
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('full_name');
    table.string('username');
    table.text('avatar_url', 'mediumtext');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
