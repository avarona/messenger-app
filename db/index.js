const db = require('./_db');

require('./models/user.js');
require('./models/account.js');

// associations here

module.exports = db;
