import React from 'react';
import './AnonymousUserLayout.scss';

const AnonymousUserLayout: React.FC = ({ children }) => {
  return (
    <div className="full-screen anonymous-layout">
      <div className="anonymous-layout-content">{children}</div>
    </div>
  );
};

export default AnonymousUserLayout;
