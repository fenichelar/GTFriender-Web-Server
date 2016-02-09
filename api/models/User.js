/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    email: {
      type: 'email',
      unique: true,
      required: true
    },
    first_name: {
      type: 'alpha',
      required: false
    },
    last_name: {
      type: 'alpha',
      required: false
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
