import { ref, provide, inject, getCurrentInstance } from 'vue'
import { setup } from './vuex-i18n-plugin'

const i18nSymbol = Symbol();

export function provideI18n(config) {
  const internalInstance = getCurrentInstance()
  const { $store } = internalInstance.appContext.config.globalProperties
  if (!$store) {
    throw new Error('$store not available. Did you load vuex before using this plugin?')
  }
  const i18n = setup($store, config)
  provide(i18nSymbol, i18n)
  return i18n
}

export function useI18n() {
  const i18n = inject(i18nSymbol)
  if (!i18n) {
    throw new Error('No i18n provided. Did you call provideI18n in your root component?')
  }

  return i18n
}
