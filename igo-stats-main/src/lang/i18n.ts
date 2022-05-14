import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import de from './de.json';
import en from './en.json';
import ru from './ru.json';

export const Languages = { en: 'English', de: 'Deutsch', ru: 'Русский' };

export const i18m = i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: process.env.NODE_ENV === 'development',
        detection: {
            order: ['queryString', 'cookie'],
        },
        cache: ['cookie'],
        interpolation: {
            escapeValue: false,
        },
        resources: {
            de: { translation: de },
            en: { translation: en },
            ru: { translation: ru },
        },
    });
