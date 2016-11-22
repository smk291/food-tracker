'use strict';

exports.up = (knex) => {
  return knex.schema.createTable('users_search_history', (table) => {
    table.increments();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.integer('search_history_id')
      .notNullable()
      .references('id')
      .inTable('search_history')
      .onDelete('CASCADE')
      .index();
    table.timestamp('searched_at').notNullable().defaultTo(knex.fn.now());
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('users_search_history');
};
