import Link from 'next/link';
import { Icon } from '../Icon/Icon';
import styles from './Header.module.scss';


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

          
        </div>
      </div>
    </header>
  )
}