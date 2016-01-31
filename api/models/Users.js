/**
* Users.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    username: {
      type: 'alphanumeric',
      unique: true,
      primaryKey: true,
      required: true
    },
    email: {
      type: 'email',
      unique: true,
      required: true
    },
    first_name: {
      type: 'alpha',
      required: true
    },
    last_name: {
      type: 'alpha',
      required: true
    },
    events: {
      collection: 'events',
      via: 'users'
    },
    comments: {
      collection: 'comments',
      via: 'user'
    },
    get_full_name: function () {
      return this.first_name + ' ' + this.last_name;
    },
    toJSON : function(){
      var obj = this.toObject();
      obj.full_name = this.get_full_name();
      return obj;
    }
  }
};
