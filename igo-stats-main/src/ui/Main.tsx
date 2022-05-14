import React from 'react';
import { Trans } from 'react-i18next';
import ReactDOMServer from 'react-dom/server';

export const Main: React.VFC = () => (
    <div className="mainBarLine">
        <div className="mainBarLine_left">
            <input
                className="input is-normal"
                type="text"
                placeholder={ReactDOMServer.renderToStaticMarkup(<Trans i18nKey="inputForSearch" />)}
            ></input>
        </div>
    </div>
);
