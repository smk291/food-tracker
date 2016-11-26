'use strict';

exports.up = (knex) => {
  return knex.schema.createTable('metrics', (table) => {
    table.increments();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.integer('age');
    table.float('weight');
    table.float('height');
    table.jsonb('activities');
    table.jsonb('allergies');
    table.jsonb('preferences');
    table.string('goals')
      .defaultTo('');
    table.timestamps(true, true);
      // Time of meal so as to use entry more than once?
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('metrics');
};
