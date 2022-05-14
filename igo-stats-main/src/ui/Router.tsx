import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Main } from './Main';
import { Players } from './Players';

export const Router: React.VFC = () => (
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/players" element={<Players />} />
    </Routes>
);
