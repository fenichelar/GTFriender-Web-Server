/**
* Events.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'alphanumericdashed',
      required: true
    },
    location: {
      type: 'string',
      defaut: 'None',
      required: false
    },
    time: {
      type: 'datetime',
      required: true
    },
    activity: {
      model: 'activities',
      required: true
    },
    comments: {
      collection: 'comments',
      via: 'event'
    },
    users: {
      collection: 'user',
      via: 'events'
    }
  }
};
