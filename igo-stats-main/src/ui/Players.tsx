import React, { useEffect, useState } from 'react';
import { Trans } from 'react-i18next';
import { PlayerData } from '../types';

import { allUsers } from '../users';
// import { Player } from './Player';
// import { getUserData } from '../users';

export const Players: React.VFC = () => {
    const [users, setUsers] = useState<PlayerData[]>([]);

    const [loading, setLoad] = useState<boolean>(false);
    useEffect(() => {
        setLoad(true);
        allUsers()
            .then((users) => setUsers(users))
            .finally(() => setLoad(false));
    }, []);
    //
    //
    return loading ? (
        <progress className="progress is-small is-primary" max="100">
            15%
        </progress>
    ) : (
        <table className="table table is-bordered table is-striped playersDesign">
            <thead>
                <tr>
                    <th>
                        Player <Trans i18nKey="name" />
                    </th>
                    <th>
                        <Trans i18nKey="rating" />
                    </th>
                    <th>
                        <Trans i18nKey="country" />
                    </th>
                    <th>
                        <Trans i18nKey="city" />
                    </th>
                    <th>
                        <Trans i18nKey="club" />
                    </th>
                </tr>
            </thead>
            <tbody>
                {users
                    .sort((prev, curr) => curr.rating_rfg - prev.rating_rfg)
                    .map((user) => (
                        <tr key={user.id}>
                            <td>
                                <a href={'/player/' + user.id}>{user.first_name + ' ' + user.last_name}</a>
                            </td>
                            <td>{user.rating_rfg}</td>
                            <td>{user.country}</td>
                            <td>{user.city}</td>
                            <td>{user.club}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};
