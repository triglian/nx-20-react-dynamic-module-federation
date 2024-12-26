import { Link } from 'react-router-dom';
import { lazy, Suspense, useLayoutEffect, useState } from 'react';
import { registerRemotes } from '@module-federation/enhanced/runtime';

const AppRoutes = lazy(() => import('./app-routes'));

export type Module = {
  name: string;
  url: string;
};

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Fetch the config file to get the federated apps urls
  useLayoutEffect(() => {
    fetch('/assets/config.json')
      .then((res) => res.json())
      .then((data) => {
        // Register the remotes with module federation
        registerRemotes(
          data.modules.map(({ name, url }: Module) => ({
            name,
            entry: `${url}/mf-manifest.json`,
          }))
        );
        setIsLoading(false);
      });
  }, []);

  return (
    <Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/remote1">Remote1</Link>
        </li>
        <li>
          <Link to="/remote2">Remote2</Link>
        </li>
        <li>
          <Link to="/remote3">Remote3</Link>
        </li>
      </ul>
      {/* We need to register before loading the AppRoutes since it contains federated modules */}
      {!isLoading && <AppRoutes />}
    </Suspense>
  );
}

export default App;
