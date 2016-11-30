/* eslint-disable max-len, camelcase */

'use strict';

exports.seed = function(knex) {
  return knex('users_meals').del()
    .then(() => {
      return knex('users_meals').insert([{
        id: 1,
        user_id: 1,
        meal_id: 1,
        in_plan: true,
        date: '2016-06-26',
        time: '14:26:16 UTC',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 2,
        user_id: 1,
        meal_id: 2,
        in_plan: true,
        date: '2016-06-26',
        time: '14:26:16 UTC',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 3,
        user_id: 1,
        meal_id: 3,
        in_plan: true,
        date: '2016-06-26',
        time: '14:26:16 UTC',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 4,
        user_id: 2,
        meal_id: 4,
        in_plan: true,
        date: '2016-06-26',
        time: '14:26:16 UTC',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 5,
        user_id: 2,
        meal_id: 5,
        in_plan: true,
        date: '2016-06-26',
        time: '14:26:16 UTC',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 6,
        user_id: 2,
        meal_id: 6,
        in_plan: false,
        date: '2016-06-26',
        time: '14:26:16 UTC',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 7,
        user_id: 2,
        meal_id: 7,
        in_plan: true,
        date: '2016-06-26',
        time: '14:26:16 UTC',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_meals_id_seq', (SELECT MAX(id) FROM users_meals));"
      );
    });
};
