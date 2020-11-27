import Vue from 'vue'
import Vuex from 'vuex'
import { createI18nPlugin, useI18nPlugin } from '@unify/vuex-i18n'
import App from './App.vue'

Vue.use(Vuex)
const store = new Vuex.Store({})

// Create i18n plugin with store as first paramter
Vue.use(createI18nPlugin(store, {
  identifiers: ['%%', '%%']  // optional config
}))

const i18n = useI18nPlugin()
i18n.add('de', {
  'My nice title': 'Ein schöner Titel',
  'content': 'Dies ist ein toller Inhalt',
  'mykey': [
    'Sie haben %%count%% neue nachricht',
    'Sie haben %%count%% neue nachrichten'
  ]
})
i18n.add('en', {
  'content': 'This is some %%type%% content',
  'mykey': [
    'You have %%count%% new message',
    'You have %%count%% new messages',
    'You have %%count%% new messagesssss'
  ]
})
i18n.set('en')

new Vue({
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
