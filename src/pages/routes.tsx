import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import withLayout from '../components/layout/withLayout';
import AnonymousUserLayout from '../components/layout/AnonymousUserLayout/AnonymousUserLayout';
import Spinner from 'components/spinner/Spinner';
import RoutesString, { Pages } from './routesString';
import PrivateRoute from './privateRoute';
import { PUBLIC_PAGES, TITLE_PAGE, API_ENTITIES_NAME } from 'constants/enum';

const Routes: React.FC = (): JSX.Element => {
  return (
    <Switch>
      <Route
        path={RoutesString.Login}
        exact={true}
        component={withLayout(AnonymousUserLayout, () => (
          <Suspense fallback={<Spinner />}>
            <Pages.Login />
          </Suspense>
        ))}
      />
      <Route
        path={RoutesString.TermAndConditions}
        exact={true}
        component={withLayout(AnonymousUserLayout, () => (
          <Suspense fallback={<Spinner />}>
            <Pages.TermAndConditions />
          </Suspense>
        ))}
      />
      <PrivateRoute
        title={TITLE_PAGE.WELCOME}
        path={RoutesString.Welcome}
        exact={true}
        component={Pages.Welcome}
        pageName={PUBLIC_PAGES.NAME.WELCOME}
      />
      <PrivateRoute
        title={TITLE_PAGE.ACCESS_DENIED}
        path={RoutesString.AccessDenied}
        exact={true}
        component={Pages.AccessDenied}
        pageName={PUBLIC_PAGES.NAME.ACCESS_DENIED}
      />
      <PrivateRoute
        title={TITLE_PAGE.MAIN}
        path={RoutesString.Main}
        exact={true}
        component={Pages.Main}
        pageName={API_ENTITIES_NAME.MAIN}
      />
    </Switch>
  );
};

export default Routes;
