var bookshelf = require('../db/bookshelf'),
    User      = require('./user'),
    Comment   = require('./comment');

var Post = bookshelf.Model.extend({
  table: 'posts',
  users: function(){
    return this.belongsTo(User);
  },
  comments: function(){
    return this.hasMany(Comment);
  }
});

module.exports = Post;
