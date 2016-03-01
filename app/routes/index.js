import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      var self = this;
      this.transitionTo('results', params.zip);
    }
  }
});
