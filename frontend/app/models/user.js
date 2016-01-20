import DS from 'ember-data';

export default DS.Model.extend({
  //Attributes
  email: DS.attr('string'),

  //Associations
  profile: DS.belongsTo('profile')
});
