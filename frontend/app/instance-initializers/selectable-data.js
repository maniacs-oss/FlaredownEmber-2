export default {
  name: 'selectableData',

  initialize: function initialize(application) {
    application.inject('component:oracle-form', 'selectableData', 'service:selectable-data');
    application.inject('component:profile-form', 'selectableData', 'service:selectable-data');
  }
};
