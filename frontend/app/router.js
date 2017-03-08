import Ember from 'ember';
import config from './config/environment';
import RouterScroll from 'ember-router-scroll';

const Router = Ember.Router.extend(RouterScroll, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('chart');

  this.route('discourse-sign-in', { path: '/discourse/sign_in' });

  this.route('password', function() {
    this.route('reset');
    this.route('update', { path: ':password_id' });
  });

  this.route('invitation', { path: '/invitation/:invitation_id' });
  this.route('onboarding', { path: '/onboarding/:step_key' });
  this.route('checkin', { path: '/checkin/:checkin_id/:step_key' });

  this.route('terms-of-service');
  this.route('privacy-policy');

  this.route('settings');
  this.route('oracle');
});

export default Router;
