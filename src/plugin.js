import { setup } from './vuex-i18n-plugin'

let i18n;

export function createI18nPlugin(store, config) {
  if (!store) {
    throw new Error('store is required')
  }
  if (i18n) {
    console.warn('Initializing i18n plugin a second time. This overwrites the previous created i18n object.');
  }
  i18n = setup(store, config)
  return {
    ...i18n,
    install: app => {
      // Exposes $i18n to components as well as $t directly
      Object.assign(app.config.globalProperties, { $i18n: i18n }, { $t: i18n.translate })
      // Allows components to `inject: ['i18n']`
      app.provide('i18n', i18n)
    }
  }
}

export function useI18nPlugin() {
  return i18n;
}
