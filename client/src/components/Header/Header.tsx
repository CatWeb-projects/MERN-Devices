'use client';

import { getRefreshToken } from '@/services/auth-token.service';
import { useUser } from '@/store/store';
import { useOutsideClick, useToast } from '@chakra-ui/react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Menu } from '../Menu/Menu';
import { Search } from '../Search/Search';
import { TopBar } from '../Topbar/Topbar';

import './Header.scss';

export const Header = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const showRef = useRef(null);
  const locale = useLocale();
  const t = useTranslations('Header');
  const tAuth = useTranslations('Auth');
  const refreshToken = getRefreshToken();
  useOutsideClick({
    ref: showRef,
    handler: () => setShowProfileMenu(false),
  });
  const toast = useToast();

  const [profile, validateSession, userLogOut, profileError] = useUser(
    useShallow((state) => [
      state.profile,
      state.validateSession,
      state.userLogOut,
      state.error,
    ]),
  );

  useEffect(() => {
    if (refreshToken) {
      validateSession(refreshToken);
    }
  }, []);

  const logout = () => {
    userLogOut();
  };

  const toggleMenu = () => {
    setShowMenu((i) => !i);
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu((i) => !i);
  };

  const checkUserForFavorites = () => {
    if (profile?.user) {
      return `/${locale}/favorites`;
    } else {
      return `/${locale}/auth/login`;
    }
  };

  useEffect(() => {
    if (profileError) {
      toast({
        title: `${profileError}`,
        // description: "We've created your account for you.",
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
      // removeFromStorage();
    }
  }, [profileError]);

  return (
    <header>
      <TopBar />
      <div className="header">
        <div
          className="header--container"
          style={showMenu ? { borderRadius: '16px 16px 0 0' } : {}}
        >
          <div className="header--logo">
            <Link href={`/${locale}`}>
              <Icon type="logo" />
            </Link>
          </div>

          <div
            className="header--menu"
            onMouseOver={() => setShowMenu(true)}
            onMouseOut={() => setShowMenu(false)}
          >
            <Icon type="menu" />
            {t('menu')}

            <Menu showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>

          <Search />

          <div className="header--main-menu">
            <div className="header--favorites">
              <Link href={checkUserForFavorites()}>
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
                  className={`logged-in ${
                    showProfileMenu ? 'logged-in--open' : ''
                  }`}
                  size="auto"
                  onClick={toggleProfileMenu}
                >
                  <Icon type="user" />
                  <span>{`${profile.user?.first_name} ${profile.user?.last_name}`}</span>
                </Button>

                {showProfileMenu && (
                  <div className="profile-menu" ref={showRef}>
                    <Link
                      onClick={() => setShowProfileMenu(false)}
                      href={`/${locale}/profile`}
                    >
                      {tAuth('profile')}
                    </Link>
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
