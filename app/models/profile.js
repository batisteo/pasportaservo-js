import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  user: belongsTo('user'),
  title: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  birthDate: attr('date'),
  profiles: hasMany('profile')
});
