import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

import localeModules from '@locales'

export const i18nPlugin = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  // set locale messages
  messages: {
    en: localeModules.en,
    vi: localeModules.vi,
  },
  // If you need to specify other options, you can set other options
  // ...
})
