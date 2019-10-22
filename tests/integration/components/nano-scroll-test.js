import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nano scroll', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{nano-scroll}}`);

    assert.dom('*').hasText('');

    // Template block usage:
    await render(hbs`
      {{#nano-scroll}}
        template block text
      {{/nano-scroll}}
    `);

    assert.dom('*').hasText('template block text');
  });

  test('it should has className', async function(assert) {
    await render(hbs`{{#nano-scroll}}Hello world{{/nano-scroll}}`);

    assert.ok(this.$().children(0).hasClass('nano'));
    assert.equal(this.$().find('.nano-content').length, 1);
  });

  test('it should extend namespace', async function(assert) {
    await render(hbs`{{#nano-scroll}}Hello world{{/nano-scroll}}`);

    assert.ok(this.$('.nano').nanoScroller);
  });
});
