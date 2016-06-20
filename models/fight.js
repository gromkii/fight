var bookshelf = require('../db/bookshelf'),
    User      = require('./user');


var Fight = bookshelf.Model.extend({
  table: 'fights'
  //Not sure what to put in here.

  //users 1 and 2.
});

module.exports = Fight;
