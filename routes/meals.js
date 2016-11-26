//eslint-disable-next-line new-cap
'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const ev = require('express-validation');
const validations = require('../validations/meals');
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


//Post meal
router.post('/meals', authorize, /*ev(validations.post),*/ (req, res, next) => {
  const { name, meal, inPlan } = req.body;
  const { userId } = req.token;

  knex('meals')
    .insert(decamelizeKeys({name, meal}), '*')
    .returning('id')
    .then((id) => {
      knex('users_meals')
        .insert(decamelizeKeys({userId, mealId: id[0], inPlan: true}), '*')
        .then((userMealRow) => {
            res.send(decamelizeKeys(userMealRow));
        });
    })
    .catch((err) => {
      next(err);
    })
});

//Get individual meal
router.get('/meals/:id', authorize, (req, res, next) => {
  const { userId } = req.token;
  const { id } = req.params;

  knex('meals')
  .where('id', id)
  .first()
  .then((meal) => {
    if (meal === [] || !meal) {
      throw boom.create(400, `No meals exist for user`)
    }

    res.send(meal);
  })
  .catch((err) => {
    next(err);
  });
});

//Get all meals
router.get('/meals', authorize, (req, res, next) => {
  const { userId } = req.token;

  knex('meals')
    .then((meals) => {
      if (meals === [] || !meals) {
        throw boom.create(400, `No meals found`);
      }

      res.send(meals);
    })
    .catch((err) => {
      next(err);
    });
});

// Patch a meal
router.patch('/meals/:id', authorize, /*ev(validations.post),*/ (req, res, next) => {
  const { name, meal } = req.body;
  const { id } = req.params;
  const { userId } = req.token;

  knex('meals')
  .where('id', id)
  .first()
  .then((row) => {
    console.log(row);

    if (!row) {
      throw boom.create(400, `No meal found at meals.id ${id}`);
    }

    knex('users_meals')
      .where('user_id', userId)
      .where('meal_id', id)
      .first()
      .then((row) => {
        if (!row) {
          throw boom.create(400, `Meal at meal.id ${id} does not belong to user.id ${userId}`);
        }
      })
      .catch((err) => {
        next(err);
      })

    const updateRow = {};

    if (name) {
      updateRow.name = name;
    }

    if (meal) {
      updateRow.meal = meal;
    }

    return knex('meals')
      .where('id', id)
      .update(decamelizeKeys(updateRow), '*');
    })
    .then((row) =>  {
      res.send(camelizeKeys(row));
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;