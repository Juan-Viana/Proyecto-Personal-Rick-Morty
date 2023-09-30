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

        <strong><label htmlFor="username" className={style.loginFormLabel}>Ingresa tus datos</label></strong>
        <input type="text"
          id="username"
          value={username}
          onChange={handleUsername}
          placeholder="Correo electrónico"
          loginFormInput
          className={style.loginFormInput}
        />
        <input type="password"
          id="password"
          value={password}
          onChange={handlePassword}
          placeholder="Contraseña"
          className={style.loginFormInput}
        />
        <button type="submit" className={style.loginFormButton}>Submit</button>
      </form>
    </div>
  );
};

export default Form;