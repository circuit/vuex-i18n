import { createApp, } from 'vue'
import { store } from './store'
import { createI18nPlugin, useI18nPlugin } from '@unify/vuex-i18n'
import App from './App.vue'
import './index.css'

const app = createApp(App)

app.use(store)

// Create i18n plugin with store as first paramter
app.use(createI18nPlugin(store, {
  identifiers: ['%%', '%%']  // optional config
}))

// Simulate loading language files asynchronous
// Could be done anywhere else since i18n can be imported using `useI18nPlugin`
const i18n = useI18nPlugin()
setTimeout(() => {
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
}, 1000)

app.mount('#app')
