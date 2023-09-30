import style from './SearchBar.module.css';
import { useState } from 'react';

function SearchBar({ onSearch }) {

  const [idCharacter, setIdCharacter] = useState("");
  const handleChange = (event) => {
    setIdCharacter(event.target.value);
  }

  return (
    <div className={style.SearchBarContainer}>
      <input type="search" value={idCharacter } onChange={handleChange} />
      <button onClick={() => { onSearch(idCharacter) }}>Agregar</button>
    </div>
  );
}

export default SearchBar;