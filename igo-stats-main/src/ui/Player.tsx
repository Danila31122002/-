import React, { useEffect, useState } from 'react';
import { Route, useParams } from 'react-router-dom';
import { PlayerData } from '../types';
import { getUserData } from '../users';
import { useAuth } from './AuthHook';
import { Trans } from 'react-i18next';
import { Settings } from './Settings';

export const Player: React.FC = () => {
    const [playerData, setPlayerData] = useState<PlayerData>();
    const { id } = useParams();
    useEffect(() => {
        getUserData(id || '').then((p) => setPlayerData(p));
    }, [id]);
    const { user } = useAuth();
    if (!playerData?.first_name) return <div>Not found</div>;
    let data = { id };
    // const transmit_id = () => {
    //     <Settings data={data} />;
    // };
    return (
        <div className="barLine">
            <div className="barLine_first">
                <div className="playersImage">
                    <img src="https://super-karapuz.ru/wa-data/public/shop/products/14/35/3514/images/9379/9379.970.jpg" />

                    <div>
                        <Trans i18nKey="id" />
                        :&nbsp;{id}
                    </div>
                    <div>
                        <Trans i18nKey="name" />: {playerData.first_name + ' ' + playerData.last_name}
                    </div>
                    <div>
                        <Trans i18nKey="rating" />: {playerData.rating_rfg}
                    </div>
                    {/* <div>
                        <Trans i18nKey="Career start" />: {playerData.rating_rfg}
                    </div> */}
                    {/* <div>
                        <Trans i18nKey="Quantity of wins" />: {playerData.rating_rfg}
                    </div>
                    <div>
                        <Trans i18nKey="Quantity of all games" />: {playerData.rating_rfg}
                    </div> */}
                </div>
                {/* <div>{user?.email === 'nikitaanikeev25@gmail.com' && <MyownAccount />}</div> */}
            </div>
            <div className="barLine_second">
                <div>
                    <table className="table table is-bordered is-striped">
                        <thead>
                            <tr>
                                <th> № </th>
                                <th>
                                    <Trans i18nKey="tournaments"></Trans>
                                </th>
                                {/* <th>
                                    <Trans i18nKey="date"></Trans>
                                </th> */}
                                {/* <th>
                                    <Trans i18nKey="Wins"></Trans>
                                </th>
                                <th>
                                    <Trans i18nKey="All games"></Trans>
                                </th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {playerData.tournaments.map((tour, element) => (
                                <tr key={tour}>
                                    <td>{element}</td>
                                    <td>
                                        <a href={'/tournaments/' + tour}>{tour}</a>
                                    </td>
                                    {/* <td>{element}</td>
                                    <td>{element}</td>
                                    <td></td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p>{playerData.club}</p>
            </div>
            <div className="barLine_fird ">
                <a href={'/settings/' + id}>
                    <button className="button is-info is-outlined is-rounded">Settings</button>
                </a>
            </div>
        </div>
    );
};
