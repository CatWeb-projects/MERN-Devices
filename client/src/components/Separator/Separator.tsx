import React from 'react';

import './Separator.scss';

export const Separator = () => {
  return (
    <div className="separator">
      <div className="separator-divider" />
      <span className="separator-title">Or</span>
      <div className="separator-divider" />
    </div>
  );
}
