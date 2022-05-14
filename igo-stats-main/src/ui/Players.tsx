import React, { useEffect, useState } from 'react';
import { Trans } from 'react-i18next';

import { allUsers } from '../users';

export const Players: React.VFC = () => {
    const [users, setUsers] = useState<string[]>([]);

    useEffect(() => {
        allUsers().then((users) => setUsers(users));
    }, []);

    return (
        <div>
            <h3>Players</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            <Trans i18nKey="name" />
                        </th>
                        <th>
                            <Trans i18nKey="rating" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user}>
                            <td>{user}</td>
                            <td>1953</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
