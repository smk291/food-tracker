/* eslint-disable max-len, camelcase */

'use strict';

exports.seed = function(knex) {
  return knex('search_history').del()
    .then(() => {
      return knex('search_history').insert([{
        id: 1,
        search_text: 'burger',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 2,
        search_text: 'soylent',
        created_at: new Date('2016-10-20 17:34:16 UTC'),
        updated_at: new Date('2016-10-20 17:34:16 UTC')
      }, {
        id: 3,
        search_text: 'tofu',
        created_at: new Date('2016-10-25 15:23:16 UTC'),
        updated_at: new Date('2016-10-25 15:23:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('search_history_id_seq', (SELECT MAX(id) FROM search_history));"
      );
    });
};
