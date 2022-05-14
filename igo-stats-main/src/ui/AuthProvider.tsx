import React, { useState } from 'react';

type User = {
    name: string;
};

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
