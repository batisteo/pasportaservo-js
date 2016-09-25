import Ember from 'ember';

export default Ember.Component.extend({
  lat: 48.7,
  lng: 9.1,
  zoom: 6,

  actions: {
    getPlaces(e) {
      this.attrs.onLoad(e.target.getBounds());
    }
  }
});
