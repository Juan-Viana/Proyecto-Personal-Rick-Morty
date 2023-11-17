import React, { useState } from 'react';
import style from './Form.module.css';
import imagen from '../../assets/Login.jpg'

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de autenticación
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit} className={style.loginForm}>
        <img src={imagen} alt="Login Picture" className={style.imagenForm} />
        <div className={style.userDataContainer}>
          <label htmlFor="username" className={style.loginFormLabel}>Ingresa tus datos</label>
          <input type="text"
            id="username"
            value={username}
            className={style.emailInput}
            placeholder="Correo electrónico"
            onChange={handleUsername}
          />
          <input type="password"
            id="password"
            value={password}
            className={style.passwordInput}
            placeholder="Contraseña"
            onChange={handlePassword}
          />
          <button type="submit" className={style.loginFormButton}>Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;