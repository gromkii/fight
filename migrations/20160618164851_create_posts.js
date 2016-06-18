
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', table =>{
    table.increments();
    table.integer('user_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('users')
      .onDelete('cascade');
    table.text('post', 'mediumtext');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
