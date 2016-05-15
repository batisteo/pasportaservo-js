import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // We don't try to fetch from the network yet to load the page quickly
    return this.store.peekAll('place');
  },

  actions: {
    fetchModel() {
      // When the Leafet map is loaded, we start fetching with pagination
      let self = this;
      this.store.query('place', {page: 1}).then((result) => {
        let lastPage = result.get('meta').pagination.pages;
        for (let i=1; i < lastPage; i++) {
          self.store.query('place', {page: i+1});
        }
      });
    }
  }
});
