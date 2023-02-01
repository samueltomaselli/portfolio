import i18n from 'i18next'; 
import { initReactI18next } from 'react-i18next';

import enTranslations from '../i18n/translations/en.json'
import ptbrTranslations from '../i18n/translations/ptbr.json'

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: {
      ...enTranslations
    },
    ptbr: {
      ...ptbrTranslations
    },
  },
  lng: 'en',
})