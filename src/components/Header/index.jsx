import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as DogsLogo } from '../../assets/dogs.svg';
import { UserContext } from '../../contexts/UserContext';

const Heeader = () => {
  const { data } = React.useContext(UserContext);

  return <header className={styles.header}>
    <nav className={`${styles.nav} container`}>
      <Link className={styles.logo} to="/" aria-label="Dogs - Home">
        <DogsLogo />
      </Link>
      {data ?
        (
          <Link className={styles.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            <span>Login / Criar</span>
          </Link>
        )
      }
    </nav>


  </header>
}

export default Heeader;