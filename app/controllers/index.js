import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    getModel(bounds) {
      this.send('fetchModel', bounds);
    }
  }
});
