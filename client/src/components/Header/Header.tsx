import Link from 'next/link';
import { Button } from '@chakra-ui/react';
import { useLocale, useTranslations } from 'next-intl';
import { Search } from '../Search/Search';
import { Icon } from '../Icon/Icon';
import { Topbar } from '../Topbar/Topbar';

import './Header.scss';

export const Header = () => {
  const locale = useLocale();
  const t = useTranslations('Header');

  return (
    <header>
      <Topbar />
      <div className="header">
        <div className="header--container">
          <div className="header--logo">
            <Link href={`/${locale}`}>
              <Icon type="logo" />
            </Link>
          </div>

          <div className="header--menu">
            <Icon type="menu" />
            {t('menu')}
          </div>

          <Search />

          <div className="header--main-menu">
            <div className="header--favorites">
              <Link href={`/${locale}/favorites`}>
                <Icon type="heart" />
              </Link>
            </div>

            <div className="compare--devices">
              <Link href={`/${locale}/compare`}>
                <Icon type="compare" />
              </Link>
            </div>

            <div className="header--cart">
              <Link href={`/${locale}/cart`}>
                <Icon type="shopping-cart" />
              </Link>
            </div>

            <div className="header--user">
              <Link href={`/${locale}/login`}>
                <Icon type="user" />
                <span>{t('account')}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}