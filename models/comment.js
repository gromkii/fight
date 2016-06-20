var bookshelf = require('../db/bookshelf'),
    User      = require('./user'),
    Post      = require('./post');

var Comment = bookshelf.Model.extend({
  table: 'comments',
  users: function(){
    return this.belongsTo(User);
  },
  posts: function(){
    return this.belongsTo(Post);
  }
});

module.exports = Comment;
