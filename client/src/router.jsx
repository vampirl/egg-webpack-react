import React, { lazy } from 'react';
import {Router, Route} from 'react-router-dom';


const ROUTE_CONFIG = [
  {
    path: '/', // 首页
    component: lazy(() => import(/* webpackChunkName: 'asset-maintain/HomePage' */ './page/homePage'))
  }
];

// eslint-disable-next-line import/prefer-default-export
export const getRoutes = () => {
  const loadedRoutes = ROUTE_CONFIG.map(({path, component}) => {
    return <Route path={path} component={component} key={path} exact/>
  });
  console.log(loadedRoutes)
  return (
    <Router history={History}>
      {loadedRoutes}
    </Router>
  );
};
