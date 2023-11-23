import './App.module.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Form from './componentes/Form/Form';
import Cards from './componentes/Cards/Cards';
import NavBar from './componentes/NavBar/NavBar';
import About from './componentes/About/About';
import Detail from './componentes/Detail/Detail';
import NotFound from './componentes/NotFound/NotFound';

function App() {
  const [charactersState, setCharacters] = useState([]);
  const location = useLocation();


  const fetchCharacter = async (id) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

    if (!response.ok) return null;
    return await response.json();
  };

  const onSearch = async (id) => {
    try {
      const newCharacter = await fetchCharacter(id);
      const characterRepeated = charactersState.some((character) => character.id === newCharacter.id);

      if (newCharacter.name) {
        if (characterRepeated) {
          window.alert('Personaje repetido');
          return;
        } else setCharacters((oldChars) => [...oldChars, newCharacter]);
      }
    } catch (error) {
      window.alert('Ocurrió un error al obtener el personaje');
    }
  };

  const onClose = (id) => {
    setCharacters(charactersState.filter((character) => character.id !== id));
  };

  return (
    <div>
      {location.pathname !== '/' && <NavBar onSearch={onSearch} />}
      <Routes>
        <Route path='/' element={<Form />} />
        <Route
          path='/home'
          element={<Cards characters={charactersState} onClose={onClose} />}
        />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;