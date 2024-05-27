'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { useOutsideClick } from '@chakra-ui/react';
import { useUser } from '@/store/store';
import { getRefreshToken } from '@/services/auth-token.service';
import { Search } from '../Search/Search';
import { Icon } from '../Icon/Icon';
import { Topbar } from '../Topbar/Topbar';
import { Button } from '../Button/Button';

import './Header.scss';

export const Header = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const showRef = useRef(null);
  const locale = useLocale();
  const t = useTranslations('Header');
  const tAuth = useTranslations('Auth');
  const refreshToken = getRefreshToken();
  useOutsideClick({
    ref: showRef,
    handler: () => setShowProfileMenu(false)
  });
  const [profile, validateSession, userLogOut] = useUser((state) => [
    state.profile,
    state.validateSession,
    state.userLogOut
  ]);

  useEffect(() => {
    if (refreshToken) {
      validateSession(refreshToken);
    }
  }, []);

  const logout = () => {
    userLogOut();
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu((i) => !i);
  };

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
                <Button
                  className={`logged-in ${showProfileMenu ? 'logged-in--open' : ''}`}
                  size="auto"
                  onClick={toggleProfileMenu}
                >
                  <Icon type="user" />
                  <span>{`${profile.user?.first_name} ${profile.user?.last_name}`}</span>
                </Button>

                {showProfileMenu && (
                  <div className="profile-menu" ref={showRef}>
                    <Link href={`/${locale}/profile`}>{tAuth('profile')}</Link>
                    <Button size="small" onClick={logout}>
                      {tAuth('logout')}
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="header--user">
                <Link href={`/${locale}/auth/login`}>
                  <Icon type="user" />
                  <span>{t('account')}</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
