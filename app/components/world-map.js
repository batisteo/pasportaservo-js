import Ember from 'ember';

export default Ember.Component.extend({
  lat: 45.519743,
  lng: 2.680522,
  zoom: 2,

  actions: {
    getPlaces() {
      this.attrs.onLoad();
    }
  }
});
