import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // We don't try to fetch from the network yet to load the page quickly
    return this.store.peekAll('place');
  },

  actions: {
    fetchModel(bounds) {
      // When the Leafet map is loaded, we start fetching with pagination
      let self = this;
      let ne = bounds._northEast, sw = bounds._southWest;
      let n = ne.lat, s = sw.lat, e = ne.lng, w = sw.lng;
      let params = {page: 1, n:n, s:s, e:e, w:w};
      this.store.query('place', params).then((result) => {
        let lastPage = result.get('meta').pagination.pages;
        for (let i=1; i < lastPage; i++) {
          params.page = i+1;
          self.store.query('place', params);
        }
      });
    }
  }
});
