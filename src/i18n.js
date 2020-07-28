import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

const currentLang = localStorage.getItem('i18nextLngCngCasion');

if (localStorage.getItem('i18nextLngCngCasion') === null) {
    localStorage.setItem('i18nextLngCngCasion', 'GB');
}

i18n.use(Backend)

    .use(initReactI18next)

    .init({
        fallbackLng: currentLang || 'GB',
        lng: currentLang || 'GB',
        debug: true,

        interpolation: {
            escapeValue: false,
        },
    });
export default i18n;
