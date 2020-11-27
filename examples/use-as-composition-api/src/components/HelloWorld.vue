<template>
  <p>Select locale:
    <a href @click.prevent="select('en')">en</a> <a href @click.prevent="select('de')">de</a>
  </p>
  <p>Current locale is: {{i18n.locale()}}</p>
  <h3>i18n used as <strong>composition api (provideI18n/useI18n)</strong></h3>
  <div>Via useI18n in setup function: {{ i18n.translate('My nice title') }}</div>
  <div>or expose just `t` in the setup function: {{ t('content', { type: 'cool'}) }}</div>
  <div>{{ t('mykey', {count: 2}, 2) }}</div>
</template>

<script>
import { provideI18n, useI18n } from '@unify/vuex-i18n'

export default {
  setup() {
    const i18n = useI18n()
    const { translate: t } = useI18n()
    const select = locale => i18n.set(locale)
    return { i18n, t, select }
  }
};
</script>
