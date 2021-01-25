import { lazy } from 'react';

import { ENTITIES, PUBLIC_PAGES } from '../constants/enum';

const Login = lazy(() => import('./login/Login'));
const TermAndConditions = lazy(() => import('./term/TermAndConditions'));
const AccessDenied = lazy(() => import('./access-denied/AccessDenied'));
const Welcome = lazy(() => import('./welcome/Welcome'));
const Main = lazy(() => import('./main/Main'));

export const Pages = {
  Login,
  TermAndConditions,
  AccessDenied,
  Welcome,
  Main,
};

const RoutesString = {
  Welcome: `/${PUBLIC_PAGES.NAME.WELCOME}`,
  Login: `/${PUBLIC_PAGES.NAME.LOGIN}`,
  TermAndConditions: `/${PUBLIC_PAGES.NAME.TAC}`,
  AccessDenied: `/${PUBLIC_PAGES.NAME.ACCESS_DENIED}`,
  Main: `/${ENTITIES.PATH.MAIN}`,
};

export default RoutesString;
