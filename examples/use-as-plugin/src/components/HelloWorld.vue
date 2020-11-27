<template>
  <p>Select locale:
    <a href @click.prevent="select('en')">en</a> <a href @click.prevent="select('de')">de</a>
  </p>
  <p>Current locale is: {{i18n.locale()}}</p>
  <h3>i18n used as <strong>plugin (app.use with createI18nPlugin/useI18nPlugin)</strong></h3>
  <div>Via Options API <em>inject</em>: {{ i18n.translate('My nice title') }}</div>
  <div>Via global property shortcut <em>$t</em>: {{ $t('content', { type: 'cool'}) }}</div>
  <div>Via global property <em>$i18n</em>: {{ $i18n.translate('mykey', {count: 2}, 2) }}</div>
</template>

<script>
export default {
  inject: ['i18n'],
  methods: {
    select(locale) {
      this.i18n.set(locale)
    }
  }
};
</script>
