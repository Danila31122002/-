import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useLocalStorage } from '../utils';

import { Menu } from './Menu';
import { Router } from './Router';
export const App: React.VFC = () => {
    const [, i18n] = useTranslation();
    const [lang] = useLocalStorage('lang', 'en');

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [i18n, lang]);

    return (
        <div>
            <Menu />
            <Router />
        </div>
    );
};
