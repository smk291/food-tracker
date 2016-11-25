/* eslint-disable max-len, camelcase */

'use strict';

exports.seed = function(knex) {
  return knex('metrics').del().then(() => {
    return knex('metrics').insert([
      {
        id: 1,
        age: 35,
        weight: 75,
        height: 175,
        activities: {"activities": ["running", "biking", "soccer"]},
        allergies: {"allergies": ["peanuts"]},
        preferences: {},
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 2,
        age: 22,
        weight: 120,
        height: 150,
        activities: {"activities": ["rock climbing", "group fitness", "yoga"]},
        allergies: {},
        preferences: {},
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }
    ]);
  }).then(() => {
    return knex.raw("SELECT setval('metrics_id_seq', (SELECT MAX(id) FROM metrics));");
  });
};
