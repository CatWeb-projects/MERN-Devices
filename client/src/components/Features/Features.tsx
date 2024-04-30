
import { useTranslations } from 'next-intl';

import './Features.scss';

export const Features = () => {
  const t = useTranslations('General');

  return (
    <div className="features">
      <div className="features--item">
        <div className="support support--first"></div>
        <div className="title">
          {t('guarantee')}
        </div>
        <div className="info">{t('free')}</div>
      </div>
      <div className="features--item">
        <div className="support support--second"></div>
        <div className="title">
         {t('delivery')}
        </div>
        <div className="info">{t('time')}</div>
      </div>
      <div className="features--item">
        <div className="support support--third"></div>
        <div className="title">
          {t('security')}
        </div>
        <div className="info">{t('repair')}</div>
      </div>
      <div className="features--item">
        <div className="support support--fourth"></div>
        <div className="title">
          {t('credit_approval')}
        </div>
        <div className="info">{t('approval')}</div>
      </div>
    </div>
  );
};
