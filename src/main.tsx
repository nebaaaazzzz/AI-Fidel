import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import am from './translation/am.json';
import en from './translation/en.json';
import swDev from './swDev';
import { Provider } from 'jotai';

function Root() {
  const defaultLanguage = localStorage.getItem('language') || 'en';
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      // the translations
      // (tip move them in a JSON file and import them,
      // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
      resources: {
        en: {
          translation: en,
        },
        am: {
          translation: am,
        },
      },
      lng: defaultLanguage, // if you're using a language detector, do not define the lng option
      fallbackLng: 'en',

      interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      },
    });
  return <App />;
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <Root />
    </Provider>
  </React.StrictMode>
);
swDev();
