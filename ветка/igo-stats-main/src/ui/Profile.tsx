import React from 'react';

import { useAuth } from './AuthHook';

import { Login } from './Login';
import { Logout } from './Logout';

export const Profile: React.VFC = () => {
    const { user } = useAuth();
    return user ? <Logout /> : <Login />;
};
