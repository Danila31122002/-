import React from 'react';
import { Trans } from 'react-i18next';

export const Tournaments: React.VFC = () => {
    // const [users, setUsers] = useState<PlayerData[]>([]);

    // useEffect(() => {
    //     allUsers().then((users) => setUsers(users));
    // }, []);
    return (
        <div className="forFooter">
            <div>
                <div>
                    <Trans i18nKey="datesOfTheEvent" />
                </div>
                <div>
                    <Trans i18nKey="datesOfTheEvent" />
                </div>
                <div>
                    <Trans i18nKey="datesOfTheEvent" />
                </div>
                <div>
                    <Trans i18nKey="datesOfTheEvent" />
                </div>
                <div>
                    <Trans i18nKey="datesOfTheEvent" />
                </div>
                <table className="table playersDesign">
                    <thead>
                        <tr>
                            <th> Участники </th>
                            <th> Город </th>
                            <th> Рейтинг </th>
                            <th> Очки </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Никита</th>
                            <th>Долгопрудный</th>
                            <th>10</th>
                            <th>0</th>
                        </tr>
                    </tbody>
                </table>
                {/* <footer className="forFooter">
                <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                    <a className="pagination-previous">Previous</a>
                    <a className="pagination-next">Next page</a>
                    <ul className="pagination-list">
                        <li>
                            <a className="pagination-link" aria-label="Goto page 1">
                                1
                            </a>
                        </li>
                        <li>
                            <span className="pagination-ellipsis">&hellip;</span>
                        </li>
                        <li>
                            <a className="pagination-link" aria-label="Goto page 45">
                                45
                            </a>
                        </li>
                        <li>
                            <a className="pagination-link is-current" aria-label="Page 46" aria-current="page">
                                46
                            </a>
                        </li>
                        <li>
                            <a className="pagination-link" aria-label="Goto page 47">
                                47
                            </a>
                        </li>
                        <li>
                            <span className="pagination-ellipsis">&hellip;</span>
                        </li>
                        <li>
                            <a className="pagination-link" aria-label="Goto page 86">
                                86
                            </a>
                        </li>
                    </ul>
                </nav>
            </footer> */}
            </div>
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
                        licensed
                        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is
                        licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                    </p>
                </div>
            </footer>
        </div>
    );
};
