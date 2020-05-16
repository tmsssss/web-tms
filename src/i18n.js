import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";

import translationEN from '../src/locales/en/translation.json';
import translationFR from '../src/locales/fr/translation.json';


const resources = {
  fr: {
    translation: translationFR
  },
  en: {
    translation: translationEN
  }

};


  i18n
  .use(detector)
  .use(reactI18nextModule) 
  .init({
    resources,
    fallbackLng: "fr", // Si le language detecté n'est pas dispo

    keySeparator: false, 

    interpolation: {
      escapeValue: false 
    }
  });





export default i18n;