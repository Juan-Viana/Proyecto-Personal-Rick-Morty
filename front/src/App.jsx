import './App.css';
import Form from './componentes/Form/Form';
import Cards from './componentes/Cards/Cards';
import NavBar from './componentes/NavBar/NavBar';
import About from './componentes/About/About';
import Detail from './componentes/Detail/Detail';
import axios from 'axios';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [charactersState, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('¡No existe un personaje con este ID!');
      }
    });
  }

  const onClose = (id) => {
    setCharacters(charactersState.filter((character) => {
      return character.id !== id;
    }));
  }

  return (
    <div>
      <NavBar onSearch={onSearch} />
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/home' element={
          <Cards characters={charactersState} onClose={onClose} />
        } />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;