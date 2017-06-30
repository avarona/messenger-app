'use strict'

const Sequelize = require('sequelize');
const db = require('../_db.js');

const User = db.define('users', {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  google_id: {
    type: Sequelize.STRING
  }
});

module.exports = User;
