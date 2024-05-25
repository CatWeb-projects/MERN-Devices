import React from 'react';
import { useTranslations } from 'next-intl';

import './Separator.scss';


export const Separator = () => {
  const t = useTranslations('Auth');
  return (
    <div className="separator">
      <div className="separator-divider" />
      <span className="separator-title">{t('or')}</span>
      <div className="separator-divider" />
    </div>
  );
}
