'use client'

import { useEffect } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { useUser } from '@/store/store';
import { getRefreshToken } from '@/services/auth-token.service';
import { Search } from '../Search/Search';
import { Icon } from '../Icon/Icon';
import { Topbar } from '../Topbar/Topbar';

import './Header.scss';
import { Button } from '../Button/Button';

export const Header = () => {
  const locale = useLocale();
  const t = useTranslations('Header');
  const accessToken = getRefreshToken();
  const [profile, validateSession, userLogOut] = useUser((state) => [state.profile, state.validateSession, state.userLogOut]);

  useEffect(() => {
    if (accessToken) {
      validateSession(accessToken);
    }
  }, []);
  
  const logout = () => {
    userLogOut();
  }

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

            {profile?.user ? (
              <div className="header--user">
               <div className="logged-in">
                 <Icon type="user" />
                  <span>{`${profile.user?.first_name} ${profile.user?.last_name}`}</span>
               </div>
               <div className="profile-menu">
                  <Link href={`/${locale}/profile`}>
                    Profile
                  </Link>
                  <Button size='small' onClick={logout}>
                    Logout
                  </Button>
                </div>
             </div>
            ) : (
              <div className="header--user">
                <Link href={`/${locale}/login`}>
                  <Icon type="user" />
                  <span>{t('account')}</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}