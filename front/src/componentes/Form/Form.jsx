import React, { useState } from 'react';
import style from './Form.module.css';

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
        <img src="https://instagram.feoh1-1.fna.fbcdn.net/v/t51.2885-15/358345685_139520429162734_741760782100016441_n.jpg?stp=dst-jpg_e35_p640x640" alt='no imagen XD'/>

        <label htmlFor="username" className={style.loginFormLabel}>Ingresa tus datos</label>
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