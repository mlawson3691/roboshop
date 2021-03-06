import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  rating: DS.attr(),
  content: DS.attr(),
  date: DS.attr('string'),
  item: DS.belongsTo('item', {async: true})
});
