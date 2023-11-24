import './App.module.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import Form from './componentes/Form/Form';
import Cards from './componentes/Cards/Cards';
import NavBar from './componentes/NavBar/NavBar';
import About from './componentes/About/About';
import Detail from './componentes/Detail/Detail';
import NotFound from './componentes/NotFound/NotFound';

function App() {
  const [charactersState, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const credentials = { email: "lgcookie2442@hotmail.com", password: "3574725" };

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const login = (userData) => {
    console.log(userData.email === credentials.email);
    console.log(userData.password === credentials.password);
    if (userData.email === credentials.email && userData.password === credentials.password) {
      setAccess(true);
      navigate('/home');
    }
  };

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

  const logOut = () => {
    setAccess(false);
  };

  return (
    <div>
      {location.pathname !== '/' && <NavBar onSearch={onSearch} logOut={logOut} />}
      <Routes>
        <Route path='/' element={<Form login={login} />} />
        <Route
          path='/home'
          element={<Cards characters={charactersState} onClose={onClose} />}
        />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {console.log("User Access: " + access)}
    </div>
  );
};

export default App;