
exports.up = function(knex, Promise) {
  return knex.schema.createTable('fights', table => {
    table.increments();
    table.integer('user1_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('users')
      .onDelete('cascade');
  table.integer('user2_id')
    .unsigned()
    .index()
    .references('id')
    .inTable('users')
    .onDelete('cascade');
  });
}

exports.down = function(knex, Promise) {
  return knex.schema.createTable('fights');
};
