'use strict';

const joi = require('joi');

module.exports.post = {
  body: {
    name: joi.string()
      .label('name')
      .required(),

    meal: joi.object()
      .label('meal')
      .required(),

    date: joi.label('date')
      .required(),

    time: joi.string()
      .label('time')
      .required(),
  }
};
