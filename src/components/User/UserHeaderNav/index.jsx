import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './userheadernav.module.css';
import { UserContext } from '../../../contexts/UserContext';
import { ReactComponent as MyPhotos } from '../../../assets/feed.svg'
import { ReactComponent as Stats } from '../../../assets/estatisticas.svg'
import { ReactComponent as AddPhoto } from '../../../assets/adicionar.svg'
import { ReactComponent as Exit } from '../../../assets/sair.svg'


const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
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
  )
}

export default UserHeaderNav;