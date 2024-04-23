import {I18n} from 'i18n-js'
import en from './en.json'
import es from './es.json'

const i18n = new I18n({
  en: en,
  es: es,
})

i18n.defaultLocale = 'en'
i18n.locale = 'en'

export default i18n