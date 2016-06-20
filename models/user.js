var bookshelf = require('../db/bookshelf'),
    Post      = require('./post'),
    Comment   = require('./comment');

var User = bookshelf.Model.extend({
  table: 'users',
  posts: function(){
    return this.hasMany(Post);
  },
  comments: function(){
    return this.hasMany(Comment);
  }
});

module.exports = User
