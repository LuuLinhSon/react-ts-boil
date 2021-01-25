import React from 'react';
import Routes from 'pages/routes';
import withAuthPersist from 'stores/AuthenticationStore/withAuthPersist';

export const App: React.FC = () => {
  return <Routes />;
};

export default withAuthPersist(App);
