export default {
  name: 'selectableData',

  initialize: function initialize(application) {
    application.inject('component:profile-form', 'selectableData', 'service:selectable-data');
    application.inject('component:oracle/request-form', 'selectableData', 'service:selectable-data');
  }
};
