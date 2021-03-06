import Ember from 'ember';
import HistoryTrackable from 'flaredown/mixins/history-trackable';

const {
  get,
  set,
  Route,
} = Ember;

export default Route.extend(HistoryTrackable, {
  model(params) {
    return get(this, 'store').find('post', params.id);
  },

  setupController(controller, model) {
    this._super(controller, model);

    set(controller, 'newComment', get(this, 'store').createRecord('comment'));
  },

  historyEntry(model) {
    let entry = this._super(...arguments);

    entry.pushObject(get(model, 'id'));

    return entry;
  },
});
