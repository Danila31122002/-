import React, { useState } from 'react';
import { Trans } from 'react-i18next';

import { Profile } from './Profile';
import { Language } from './Language';

export const Menu: React.VFC = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar" role="navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                    <Trans i18nKey="title" />
                </a>
                <a className={'navbar-burger' + (open ? ' is-active' : '')} onClick={() => setOpen(!open)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
            <div id="navbar-menu" className={'navbar-menu' + (open ? ' is-active' : '')}>
                <div className="navbar-start">
                    <a className="navbar-item" href="/">
                        <Trans i18nKey="main" />
                    </a>
                    <a className="navbar-item" href="/players">
                        <Trans i18nKey="players" />
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable" id="nav-links">
                        <a className="navbar-link">
                            <Trans i18nKey="test" />
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                <Trans i18nKey="test1" />
                            </a>
                            <a className="navbar-item">
                                <Trans i18nKey="test2" />
                            </a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item">
                                <Trans i18nKey="test3" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <Language />
                    </div>
                    <div className="navbar-item">
                        <Profile />
                    </div>
                </div>
            </div>
        </nav>
    );
};
