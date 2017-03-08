import Ember from 'ember';

const {
  Component,
  computed: {
    sort,
    alias,
  },
} = Ember;

export default Component.extend({
  countrySorting: ['name:asc'],

  sexes: alias('selectableData.sexes'),
  countries: sort('selectableData.countries', 'countrySorting'),

  actions: {
    askOracle(oracleRequest) {
    },
  },
});
