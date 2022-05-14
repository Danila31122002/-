import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Main } from './Main';
import { Player } from './Player';
import { Players } from './Players';
import { Settings } from './Settings';
import { Tournaments } from './Tournament';

export const Router: React.VFC = () => (
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/players" element={<Players />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="/tournaments/:name" element={<Tournaments />} />
        <Route path="/settings/:id" element={<Settings />} />
    </Routes>
);
