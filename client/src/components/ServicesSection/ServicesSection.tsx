import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Icon } from '../Icon/Icon';

import './ServicesSection.scss';

export const ServicesSection = () => {
  const t = useTranslations('General');
  const locale = useLocale();

  return (
    <div className="service-section">
      <div className="smart-protection service">
        <Link href={`/${locale}/protection`}>
          <Image
            src="/images/offer-day.webp"
            alt="offer-day"
            width={120}
            height={0}
            style={{ width: 'auto', height: 'auto' }}
            loading="lazy"
          />
          <div className="service--card">
            <h3>{t('offer_day_title')}</h3>
            <span>{t('offer_day')}</span>
          </div>
          <div>
            <Icon type="play-button-arrowhead" width="30" height="30" />
          </div>
        </Link>
      </div>
      <div className="trade-in service">
        <Link href={`/${locale}/tradein`}>
          <Image
            src="/images/trade-in.webp"
            alt="trade-in"
            width={120}
            height={0}
            style={{ width: 'auto', height: 'auto' }}
            loading="lazy"
          />
          <div className="service--card">
            <h3>Trade In</h3>
            <span>{t('trade_in')}</span>
          </div>
          <div>
            <Icon type="play-button-arrowhead" width="30" height="30" />
          </div>
        </Link>
      </div>
    </div>
  );
};
