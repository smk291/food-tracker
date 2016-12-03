//eslint-disable-next-line new-cap
'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const ev = require('express-validation');
const validations = require('../validations/metrics');
const { camelizeKeys, decamelizeKeys } = require('humps');
const jwt = require('jsonwebtoken');

const authorize = function(req, res, next) {
  jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.verify = false;

      return next(boom.create(401, 'Unauthorized'));
    }

    res.verify = true;
    req.token = decoded;

    next();
  });
};

//Post user's metrics
router.post('/metrics', authorize, ev(validations.post), (req, res, next) => {
  const { userId } = req.token;

  knex('metrics')
    .where('user_id', userId)
    .first()
    .then((row) => {
      if (row) {
        throw boom.create(400, `Metrics already exist for user.id ${userId}`);
      }

      const { age, weight, height, activities, allergies, preferences, goals } = req.body;
      const newMetrics = { age, weight, height, activities, allergies, preferences, goals };

      newMetrics.userId = userId;

      knex('metrics')
        .insert(decamelizeKeys(newMetrics), '*')
        .then((row) => {
          res.send(row);
        });
      })
    .catch((err) => {
      next(err);
    });
});

//Get current user metrics
router.get('/metrics', authorize, (req, res, next) => {
  const { userId } = req.token;

  knex('metrics')
    .where('user_id', userId)
    .first()
    .then((userMetrics) => {
      res.send(camelizeKeys(userMetrics));
    })
    .catch((err) => {
      next(err);
    });
});

//Get a user's metrics
router.get('/metrics/:id', authorize, (req, res, next) => {
  const { id } = req.params;

  knex('metrics')
    .where('user_id', id)
    .first()
    .then((userMetrics) => {
      res.send(camelizeKeys(userMetrics));
    })
    .catch((err) => {
      next(err);
    });
});

// Patch a user's metrics
router.patch('/metrics', authorize, ev(validations.post), (req, res, next) => {
  const { userId } = req.token;
  const { age, weight, height, activities, allergies, preferences, goals } = req.body;

  knex('metrics')
    .where('user_id', userId)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(400, `No metrics exist for current user`);
      }

      const updateMetrics = { age, weight, height, activities, allergies, preferences, goals};
      updateMetrics.userId = userId;


      return knex('metrics')
        .where('user_id', userId)
        .update(decamelizeKeys(updateMetrics), '*');
    })
    .then((row) => {
      res.send(camelizeKeys(row));
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;