import React, { useEffect, useState } from 'react';
import './App.css';
import CharactersGridList from './components/characters/characters-grid-list';
import { getCharacters } from './services/marvel-characters-service';
import { ThemeProvider } from '@material-ui/core';

import MarvelAppBar from './components/layout/marvel-app-bar';
import { makeServer } from './server';
import {blueTheme} from './themes';


// use to mock service in development
if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}

function App() {
  let [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharacters().then((charactersRes) => {
      setCharacters(charactersRes);
    });
  }, [])

  return (
    <ThemeProvider theme={blueTheme}>
      <MarvelAppBar />
      <CharactersGridList characters={characters} />
    </ThemeProvider>
  );
}

export default App;