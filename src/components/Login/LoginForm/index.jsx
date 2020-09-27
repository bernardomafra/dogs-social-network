import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button";
import Input from "../../Input";
import Error from "../../Error";
import useForm from '../../../hooks/useForm';
import { UserContext } from '../../../contexts/UserContext';
import styles from './loginform.module.css';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button disabled={loading}>{
          loading ? 'Carregando...' : 'Entrar'}
        </Button>
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={styles.buttonCriar} to="/login/criar">Cadastro</Link>
      </div>
    </section>
  );
};

export default LoginForm;
