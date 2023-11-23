import style from './NotFound.module.css'
import React from 'react';
import { useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();
  const path = location.pathname;
  const validPaths = ['/', '/home', '/about', '/detail'];
  const isValidPath = validPaths.includes(path);

  if (!isValidPath) {
    return (
      <div className={style.container}>
        <h1>Error 404</h1>
        <p>La página que buscas no se ha encontrado.</p>
      </div>
    );
  }
};

export default NotFound;
