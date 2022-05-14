import React, { useState } from 'react';
import { User } from '../types';
//задать вопрос

type ContextProps = {
    user: User | null;
    setUser: any;
};

export const AuthContext = React.createContext<Partial<ContextProps>>({});

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
