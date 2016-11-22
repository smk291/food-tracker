/* eslint-disable max-len, camelcase */

'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        first_name: 'Adele',
        last_name: 'Rowling',
        email: 'jk@g.com',
        hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',//youreawizard
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 2,
        first_name: 'Phillip',
        last_name: 'Fry',
        email: 'fry@g.com',
        hashed_password: '$2a$12$rNqQgSRcuPFNZ4BpQGBRJuDjVS9tFtMFqOahN3sEDh2NBid9qjG.S',//benderrules
        created_at: new Date('2016-11-22 14:26:16 UTC'),
        updated_at: new Date('2016-11-22 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
