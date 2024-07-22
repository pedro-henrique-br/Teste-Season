import styles from './header.module.css'

export const Header = () => {
  return (
    <header>
      <img className={styles["header-logo"]} src="src/assets/img/Logo-branca-1.png"></img>
    </header>
  )
}