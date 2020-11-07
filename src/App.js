import React from 'react';
import { renderRoutes } from 'react-router-config';

import ACAppHeader from 'components/163-header';
import ACAppFooter from 'components/163-footer';

import router from './router';
import { HashRouter } from 'react-router-dom';

export default function App() {
  return (
    <HashRouter>
      <ACAppHeader />
      {renderRoutes(router)}
      <ACAppFooter />
    </HashRouter>
  )
}

