'use strict';

exports.up = (knex) => {
  return knex.schema.createTable('users_meals', (table) => {
    table.increments();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.integer('meal_id')
      .notNullable()
      .references('id')
      .inTable('meals')
      .onDelete('CASCADE')
      .index();
    table.boolean('in_plan')
      .notNullable();
    // table.string('intake')
    //   .notNullable()
    //   .index();
    table.date('date')
      .notNullable()
      .defaultTo(knex.fn.now())
      .index();
    table.time('time')
      .notNullable()
      .defaultTo(knex.fn.now())
      .index();
    table.timestamps(true, true);

      // Time of meal so as to use entry more than once?
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('users_meals');
};
