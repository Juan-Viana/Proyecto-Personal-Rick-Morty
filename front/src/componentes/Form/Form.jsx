import React, { useState } from 'react';
import style from './Form.module.css';
import imagen from '../../assets/Login.jpg'

const Form = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = { email: email, password: password};

    document.getElementById('errorEmail').textContent = validateEmail();
    document.getElementById('errorPassword').textContent = validatePassword();
    login(userData);
  };

  const validateEmail = () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) return 'Ingrese un email valido'
    if (email.trim() === '') return 'El email no puede estar vacío';
    if (email.trim().length > 35) return 'Email máximo de 35 caracteres';
    return '';
  };

  const validatePassword = () => {
    const regexPassword = /\d+/;

    if (password.match(regexPassword) < 1) return 'La contraseña debe tener minimo un número';
    if (password.trim().length < 6) return 'Contraseña demasiado corta';
    if (password.trim().length > 10) return 'Contraseña demasiado larga';
    return '';
  };

  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit} className={style.loginForm}>
        <img src={imagen} alt="Login Picture" className={style.imagenForm} />
        <div className={style.userDataContainer}>
          <label htmlFor="email" className={style.dataLabel}>Ingresa tus datos</label>
          <input type="text"
            id="email"
            value={email}
            className={style.emailInput}
            placeholder="Correo electrónico"
            onChange={handleEmail}
          />
          <p id="errorEmail" className={style.errorText}></p>
          <input type="password"
            value={password}
            className={style.passwordInput}
            placeholder="Contraseña"
            onChange={handlePassword}
          />
          <p id="errorPassword" className={style.errorText}></p>
          <button type="submit" className={style.loginFormButton}>Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;