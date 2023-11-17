import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';

function NavBar({ onSearch }) {
  return (
    <div className={style.container}>
      <div className={style.navContainer}>
        <Link to="/home">
          <button className={style.linkButton}>Home</button>
        </Link>
        <Link to="/about" >
          <button className={style.linkButton}>About</button>
        </Link>
      </div>
      <div className={style.searchBar}>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
}

export default NavBar;
