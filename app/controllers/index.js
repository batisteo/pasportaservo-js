import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    getModel() {
      this.send('fetchModel');
    }
  }
});
