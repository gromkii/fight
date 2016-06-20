var bookshelf = require('../db/bookshelf'),
    Post      = require('./post'),
    Comment   = require('./comment'),
    Fight     = require('./fight');

var User = bookshelf.Model.extend({
  table: 'users',
  posts: function(){
    return this.hasMany(Post);
  },
  comments: function(){
    return this.hasMany(Comment);
  },
  fights: function(){
    return this.hasMany(Fight);
  }
});

module.exports = User
