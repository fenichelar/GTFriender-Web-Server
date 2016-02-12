/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var _ = require('lodash');
var _super = require('sails-permissions/api/models/User');

_.merge(exports, _super);
_.merge(exports, {

  // Extend with custom logic here by adding additional fields, methods, etc.
  attributes: {
    gender: {
      type: 'alpha',
      required: false
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
});
