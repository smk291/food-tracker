//eslint-disable-next-line new-cap
'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const ev = require('express-validation');
const validations = require('../validations/users');
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

// Post user_meal
// Accomplished from the users route

//Get individual user_meal without data from meal table
router.get('/users_meals/:id', authorize, (req, res, next) => {
  const { userId } = req.token;
  const mealId  = req.params.id;
  console.log(`Getting individual user_meal`);

  knex('users_meals')
    .where('user_id', userId)
    .where('meal_id', mealId)
    .first()
    .then((userMeal) => {
      if (!userMeal) {
        throw boom.create(400, `No meal listed for user.id ${userId} at meal.id ${mealId}`);
      }

      res.send(userMeal);
    })
    .catch((err) => {
      next(err);
    })

});

//Get individual user_meal with meal data
router.get('/users_meals_data/:id', authorize, (req, res, next) => {
  const { userId } = req.token;
  const mealId  = req.params.id;
  console.log(`Getting individual user_meal`);

  knex('users_meals')
    .where('user_id', userId)
    .where('meal_id', mealId)
    .innerJoin('meals', 'meals.id', 'users_meals.meal_id')
    .then((userMeal) => {
      if (!userMeal) {
        throw boom.create(400, `No meal listed for user.id ${userId} at meal.id ${mealId}`);
      }

      res.send(userMeal);
    })
    .catch((err) => {
      next(err);
    })

});

//Get all of user's user_meals
router.get('/users_meals/', authorize, (req, res, next) => {
  const { userId } = req.token;

  knex('users_meals')
    .where('user_id', userId)
    .then((userMeal) => {
      res.send(userMeal);
    })
    .catch((err) => {
      next(err);
    })

});

//Get all of user's user_meals with data
router.get('/users_meals_data/', authorize, (req, res, next) => {
  const { userId } = req.token;
  console.log(`Getting individual user_meal`);

  knex('users_meals')
    .where('user_id', userId)
    .innerJoin('meals', 'meals.id', 'users_meals.meal_id')
    .then((userMeal) => {
      res.send(userMeal);
    })
    .catch((err) => {
      next(err);
    })

});

module.exports = router;