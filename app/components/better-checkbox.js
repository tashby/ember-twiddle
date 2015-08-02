import Ember from "ember";

export default Ember.Component.extend({
  attributeBindings: ['type', 'value', 'checked', 'disabled', 'id'],
  tagName: 'input',
  type: 'checkbox',
  checked: false,
  disabled: false,

  change() {
    this.set('checked', this.$().prop('checked'));
    this.sendAction('action', this.get('value'), this.get('checked'));
  }
});
