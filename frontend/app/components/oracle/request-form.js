import Ember from 'ember';

const {
  get,
  Component,
  computed: {
    alias,
  },
} = Ember;

export default Component.extend({
  sexes: alias('selectableData.sexes'),

  actions: {
    askOracle(oracleRequest) {
      oracleRequest
        .askOracle()
        .then(() => oracleRequest.save())
        .then(() => get(this, 'transitionToResult')(oracleRequest));
    },
  },
});
