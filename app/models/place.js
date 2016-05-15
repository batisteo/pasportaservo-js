import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  owner: belongsTo('profile'),
  city: attr(),
  latitude: attr(),
  longitude: attr(),
  link: attr(),
  location: Ember.computed('latitude', 'longitude', function() {
    return [this.get('latitude'), this.get('longitude')];
  })
});
