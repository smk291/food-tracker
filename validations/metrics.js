'use strict';

const joi = require('joi');

module.exports.post = {
  body: {
    age: joi.number()
      .integer()
      .max(100)
      .min(12)
      .label('age'),

    weight: joi.number()
      .integer()
      .min(30)
      .max(200)
      .label('weight'),

    height: joi.number()
      .label('height'),

    activities: joi.object()
      .label('activities'),

    allergies: joi.object()
      .label('allergies'),

    preferences: joi.object()
      .label('preferences'),

    goals: joi.string()
      .min(0)
      .max(255)
      .label('goals')
  }
};