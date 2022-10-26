import styles from './Header.module.css'

import fogueteLogo from '../assets/rocket.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={fogueteLogo} alt="logo-tipo foguete" />
      <strong className={styles.strong}>
        <span className={styles.to}>to</span>
        <span className={styles.do}>do</span>
      </strong>
    </header>
  )
}