import style from './SearchBar.module.css';
import { useState } from 'react';

function SearchBar({ onSearch }) {

  const [idCharacter, setIdCharacter] = useState("");
  const handleChange = (event) => {
    setIdCharacter(event.target.value);
  }

  return (
    <div className={style.searchContainer}>
      <input type="search"
        value={idCharacter}
        className={style.searchInput}
        placeholder="ID del personaje"
        onChange={handleChange}
      />
      <button
        className={style.searchButton}
        onClick={() => { onSearch(idCharacter) }}>
        Agregar
      </button>
      <button
        className={style.searchButton}
        onClick={() => { onSearch(Math.floor(Math.random() * 800) + 1) }}>
        Aleatorio
      </button>
    </div>
  );
}

export default SearchBar;