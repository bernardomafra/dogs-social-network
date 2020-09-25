import React from 'react' ;
import styles from './header.module.css'
import { Link } from 'react-router-dom'
const Heeader = () => {
  return <div className={styles.header}>Header
    <nav>
      <Link to="/" >Home</Link>
      <Link to="/login" >Login / Criar</Link>
    </nav>
  

  </div>
}

export default Heeader;