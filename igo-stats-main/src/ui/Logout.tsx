import React, { useCallback } from 'react';
import { GoogleLogout } from 'react-google-login';
import { Trans } from 'react-i18next';

import { useAuth } from './AuthHook';

export const Logout: React.FC = () => {
    const { user, setUser } = useAuth();

    const onSuccess = useCallback(() => {
        setUser(null);
    }, [setUser]);

    return (
        <GoogleLogout
            render={(props) => (
                <div className="buttons">
                    <a className="button is-primary" onClick={props.onClick}>
                        <strong>
                            {user?.name} <Trans i18nKey="logout" />
                        </strong>
                    </a>
                </div>
            )}
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}
            buttonText="Sign out"
            onLogoutSuccess={onSuccess}
        />
    );
};
