exports.up = function(knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments();
    table.text('title').notNullable().defaultTo('');
    table.text('body').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};
