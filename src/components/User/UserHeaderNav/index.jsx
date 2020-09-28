import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './userheadernav.module.css';
import useMedia from '../../../hooks/useMedia';
import { UserContext } from '../../../contexts/UserContext';
import { ReactComponent as MyPhotos } from '../../../assets/feed.svg';
import { ReactComponent as Stats } from '../../../assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../../assets/adicionar.svg';
import { ReactComponent as Exit } from '../../../assets/sair.svg';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile &&
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} 
          ${mobileMenu && styles.mobileButtonActive}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      }

      <nav className={`${mobile ? styles.navMobile : styles.nav} 
      ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/conta" end activeClassName={styles.active}>
          <MyPhotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas" activeClassName={styles.active}>
          <Stats />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/postar" activeClassName={styles.active}>
          <AddPhoto />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={userLogout}>
          <Exit />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}

export default UserHeaderNav;