/**
 * Event.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    location: {
      type: 'string',
      required: false
    },
    time: {
      type: 'datetime',
      required: true
    },
    activity: {
      model: 'activity',
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
