/**
* Users.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    username: {
      type: 'string',
      unique: true,
      primaryKey: true,
      required: true
    },
    email: {
      type: 'string',
      unique: true,
      required: true
    },
    first_name: {
      type: 'string',
      required: true
    },
    last_name: {
      type: 'string',
      required: true
    },
    events: {
      collection: 'events',
      via: 'users'
    },
    comments: {
      collection: 'comments',
      via: 'user'
    }
  }
};
