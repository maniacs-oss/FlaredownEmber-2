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

  this.route('posts', function() {
    this.route('new');
    this.route('show', { path: '/:id' });
    this.route('topic', { path: '/:type/:id' });
    this.route('profile');
    this.route('followings');
  });
});

export default Router;
