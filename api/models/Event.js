/**
 * Event.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string',
      required: true
    },
    location: {
      type: 'string',
      required: false
    },
    start: {
      type: 'date',
      required: true
    },
    end: {
      type: 'date',
      required: true
    },
    allDay: {
      type: 'boolean',
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
