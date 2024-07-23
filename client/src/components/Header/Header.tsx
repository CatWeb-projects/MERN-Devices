'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useOutsideClick, useToast } from '@chakra-ui/react';
import { useCategories, useUser } from '@/store/store';
import { getRefreshToken } from '@/services/auth-token.service';
import { Search } from '../Search/Search';
import { Icon } from '../Icon/Icon';
import { Topbar } from '../Topbar/Topbar';
import { Button } from '../Button/Button';
import { apiBaseUrl } from '@/helpers';
import { quickLinks } from '@/constants/quickLinks';

import './Header.scss';

export const Header = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showQuickLinks, setShowQuickLinks] = useState('');
  const showRef = useRef(null);
  const locale = useLocale();
  const t = useTranslations('Header');
  const tAuth = useTranslations('Auth');
  const tCategories = useTranslations('Categories');
  const refreshToken = getRefreshToken();
  useOutsideClick({
    ref: showRef,
    handler: () => setShowProfileMenu(false)
  });
  const toast = useToast();

  const [profile, validateSession, userLogOut, profileError] = useUser((state) => [
    state.profile,
    state.validateSession,
    state.userLogOut,
    state.error
  ]);

  const [categories, getCategories, loading, error] = useCategories((state) => [
    state.categories,
    state.getCategories,
    state.loading,
    state.error
  ]);

  useEffect(() => {
    getCategories();
  }, []);

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

  const checkQuickLinksRedirect = (submenu: any, category: string) => {
    if (submenu.getInfo) {
      return `/${locale}/device/${submenu.properties}`;
    } else if (submenu?.properties && !submenu.categoryLink) {
      return `/${locale}/devices/${category}/${submenu.properties}`;
    } else if (submenu?.properties) {
      return `/${locale}/devices/${submenu.categoryLink}/${submenu.properties}`;
    } else if (submenu?.categoryLink) {
      return `/${locale}/devices/${submenu.categoryLink}`;
    } else if (typeof submenu === 'string') {
      return `/${locale}/devices/${submenu.toLowerCase().split(' ').join('-')}`;
    } else {
      return `/${locale}/devices/${category}`;
    }
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
        position: 'top-right'
      });
      // removeFromStorage();
    }
  }, [profileError]);

  return (
    <header>
      <Topbar />
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

            <div className="menu" style={!showMenu ? { display: 'none' } : {}}>
              <div className="menu--categories">
                {categories &&
                  categories.map((category) => (
                    <div
                      className="menu--category"
                      onMouseOver={() => setShowQuickLinks(`${category.link.slice(1)}`)}
                      key={category.id}
                    >
                      <Link
                        onClick={() => setShowMenu(false)}
                        href={`/${locale}/devices${category.link}`}
                      >
                        <Image
                          priority
                          src={`${apiBaseUrl}${category?.imgUrl}`}
                          alt={category.name}
                          width={40}
                          height={40}
                        />
                        <span className="menu--category--title">
                          {tCategories(`${category.translate}`)}
                        </span>
                      </Link>
                    </div>
                  ))}
              </div>

              <div className="menu--quicklinks">
                {quickLinks.map((quickLink) => (
                  <div
                    className="quicklinks"
                    style={showQuickLinks === quickLink.name ? { display: 'flex' } : {}}
                    key={quickLink.name}
                  >
                    <div className="quicklinks--wrapper">
                      {quickLink?.subCategories?.map((subCategory) => (
                        <div className="quicklinks--properties" key={subCategory.quickLinksName}>
                          <div className="quicklinks--properties--title">
                            {subCategory.quickLinksName}
                          </div>
                          {subCategory?.links?.map((submenu: any, key) => (
                            <Link
                              href={checkQuickLinksRedirect(submenu, quickLink.name)}
                              onClick={() => setShowMenu(false)}
                              key={key}
                            >
                              {submenu?.title ? submenu.title : submenu}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
                  className={`logged-in ${showProfileMenu ? 'logged-in--open' : ''}`}
                  size="auto"
                  onClick={toggleProfileMenu}
                >
                  <Icon type="user" />
                  <span>{`${profile.user?.first_name} ${profile.user?.last_name}`}</span>
                </Button>

                {showProfileMenu && (
                  <div className="profile-menu" ref={showRef}>
                    <Link onClick={() => setShowProfileMenu(false)} href={`/${locale}/profile`}>
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
