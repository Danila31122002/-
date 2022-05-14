import React, { useCallback } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Trans } from 'react-i18next';

import { useAuth } from './AuthHook';
import { getUserData } from '../users';

export const Login: React.FC = () => {
    const { setUser } = useAuth();

    const onSuccess = useCallback(
        (r: any) => {
            getUserData(r.profileObj.name).then(() => {
                setUser({
                    name: r.profileObj.name,
                    email: r.profileObj.email,
                    // imageUrl: userData.Avatar || r.profileObj.imageUrl,
                    // team: userData.Team,
                    // admin: userData.Admin,
                });
            });
        },
        [setUser]
    );

    const onFailure = useCallback(() => {
        // TODO something
    }, []);

    return (
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}
            buttonText="Google sign in"
            onSuccess={onSuccess}
            onFailure={onFailure}
            isSignedIn
            cookiePolicy={'single_host_origin'}
            render={(props) => (
                <div className="buttons">
                    <a className="button is-primary" onClick={props.onClick}>
                        <strong>
                            <Trans i18nKey="login" />
                        </strong>
                    </a>
                </div>
            )}
        />
    );
};
