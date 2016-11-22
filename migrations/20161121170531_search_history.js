'use strict';
exports.up = (knex) => {
  return knex.schema.createTable('search_history', (table) => {
    table.increments();
    table.string('search_text');
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('search_history');
};
