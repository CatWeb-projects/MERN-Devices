import Link from 'next/link';
import { Button } from '@chakra-ui/react';
import { useLocale } from 'next-intl';
import { Search } from '../Search/Search';
import { Icon } from '../Icon/Icon';
import { Topbar } from '../Topbar/Topbar';

import './Header.scss';


export const Header = () => {
  const locale = useLocale();
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
            Categories
          </div>

          <Search />

          <div className="header--main-menu">
            <div className="header--favorites">
              <Link href="/favorites">
                <Icon type="heart" />
              </Link>
            </div>

            <div className="compare--devices">
              <Link href="/compare">
                <Icon type="compare" />
              </Link>
            </div>

            <div className="header--cart">
              <Link href="/cart">
                <Icon type="shopping-cart" />
              </Link>
           </div>

           <div className="header--user">
              <Button size="full-width">
                <Icon type="user" />
                <span>Account</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}