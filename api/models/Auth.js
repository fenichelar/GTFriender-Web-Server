/**
 * Auth
 *
 * @module      :: Model
 * @description :: Holds all authentication methods for a User
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

  attributes: require('waterlock').models.auth.attributes({

    /* e.g.
    nickname: 'string'
    */
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
    }

  }),

  beforeCreate: require('waterlock').models.auth.beforeCreate,
  beforeUpdate: require('waterlock').models.auth.beforeUpdate
};
