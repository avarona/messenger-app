'use strict'

const Sequelize = require('sequelize');
const db = require('../_db.js');

const Account = db.define('accounts', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  website: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  icon: {
    type: Sequelize.STRING
  }
});

module.exports = Account;
