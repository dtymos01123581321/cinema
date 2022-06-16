import React from 'react';

export const loadable = {
  Movies: React.lazy(() => import('../pages/Movies/Movies')),
  NoMatch: React.lazy(() => import('../pages/404/NoMatch')),
};
