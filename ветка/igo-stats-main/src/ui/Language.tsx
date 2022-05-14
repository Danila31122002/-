import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import { useLocalStorage, useOuterClick } from '../utils';
import { Languages } from '../lang/i18n';

export const Language: React.VFC = () => {
    const [open, setOpen] = useState(false);

    const [, i18n] = useTranslation();
    const [, setLang] = useLocalStorage('lang', 'en');

    const changeLanguage = (lng: string) => () => {
        i18n.changeLanguage(lng);
        setLang(lng);
        setOpen(false);
    };

    const innerRef = useOuterClick(() => {
        open && setOpen(false);
    });

    return (
        <div>
            <div className={'dropdown' + (open ? ' is-active' : '')}>
                <div className="dropdown-trigger">
                    <button className="button is-primary is-light" onClick={() => setOpen(true)}>
                        <FontAwesomeIcon icon={faGlobe} />
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu" ref={innerRef}>
                    <div className="dropdown-content">
                        {Object.keys(Languages).map((lang) => (
                            <a href="#" className="dropdown-item" key={lang} onClick={changeLanguage(lang)}>
                                {Languages[lang as keyof typeof Languages]}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
