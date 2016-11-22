/* eslint-disable max-len, camelcase */

'use strict';

exports.seed = function(knex) {
  return knex('users_search_history').del()
    .then(() => {
      return knex('users_search_history').insert([{
        id: 1,
        user_id: 1,
        search_history_id: 1,
        searched_at: new Date('2016-06-26 14:26:16 UTC'),
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 2,
        user_id: 1,
        search_history_id: 2,
        searched_at: new Date('2016-07-24 15:26:16 UTC'),
        created_at: new Date('2016-07-24 15:26:16 UTC'),
        updated_at: new Date('2016-07-24 15:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_search_history_id_seq', (SELECT MAX(id) FROM users_search_history));"
      );
    });
};
