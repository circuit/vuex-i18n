<template>
  <h2>vuex-i18n used as vue3 composition api</h2>
  <HelloWorld/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { provideI18n, useI18n } from 'vuex-i18n'

export default {
  name: 'App',
  setup() {
    // Create i18n and provide it to all component which can use
    // i18n by calling `useI18n()`
    const i18n = provideI18n({
      identifiers: ['%%', '%%']  // optional config
    });

    // Simulate loading language files asynchronous
    // Could be done anywhere else since i18n can be imported using `useI18n`
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
  },
  components: {
    HelloWorld,
  },
};
</script>
