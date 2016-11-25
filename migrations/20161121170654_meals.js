'use strict';

exports.up = (knex) => {
  return knex.schema.createTable('meals', (table) => {
    table.increments();
    table.string('name')
      .notNullable()
      .index();
    table.jsonb('meal')
      .notNullable()
      .index();
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('meals');
};