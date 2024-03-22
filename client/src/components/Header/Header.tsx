import Link from 'next/link';
import { Search } from '../Search/Search';
import { Icon } from '../Icon/Icon';
import styles from './Header.module.scss';
import { Button } from '@chakra-ui/react';


export const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className={`${styles['header--container']}`}>
          <div className={`${styles['header--logo']}`}>
            <Link href="/">
              <Icon type="logo" />
            </Link>
          </div>

          <div className={`${styles['header--menu']}`}>
            <Icon type="menu" />
            Categories
          </div>

          <Search />

          <div className={`${styles['header--main-menu']}`}>
            <div className="header--favorites">
              <Link href="/favorites">
                <Icon type="heart" />
              </Link>
            </div>

            <div className={`${styles['compare--devices']}`}>
              <Link href="/compare">
                <Icon type="compare" />
              </Link>
            </div>

            <div className={`${styles['header--cart']}`}>
              <Link href="/cart">
                <Icon type="shopping-cart" />
              </Link>
           </div>

           <div className={`${styles['header--user']}`}>
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