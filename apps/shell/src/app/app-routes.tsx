import { loadRemote } from '@module-federation/enhanced/runtime';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import NxWelcome from './nx-welcome';

const Remote1 = lazy(() =>
  loadRemote<typeof import('remote1/Module')>('remote1/Module')
);
const Remote2 = lazy(() =>
  loadRemote<typeof import('remote2/Module')>('remote2/Module')
);
const Remote3 = lazy(() =>
  loadRemote<typeof import('remote3/Module')>('remote3/Module')
);

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<NxWelcome title="shell" />} />
    <Route path="/remote1" element={<Remote1 />} />
    <Route path="/remote2" element={<Remote2 />} />
    <Route path="/remote3" element={<Remote3 />} />
  </Routes>
);

export default AppRoutes;
