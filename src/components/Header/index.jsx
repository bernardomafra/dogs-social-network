import React from 'react' ;
import styles from './header.module.css'
import { Link } from 'react-router-dom'
import {ReactComponent as DogsLogo} from '../../assets/dogs.svg' 
const Heeader = () => {
  return <header className={styles.header}>
    <nav className={`${styles.nav} container`}>
      <Link className={styles.logo} to="/" aria-label="Dogs - Home"> 
        <DogsLogo/>
      </Link>
      <Link className={styles.login} to="/login">
         <span>Login / Criar</span> 
      </Link>
    </nav>
  

  </header>
}

export default Heeader;