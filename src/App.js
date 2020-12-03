import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import CharactersGridList from './components/characters/characters-grid-list';
import { getCharacters } from './services/marvel-characters-service';
import { ThemeProvider } from '@material-ui/core';

import MarvelAppBar from './components/layout/marvel-app-bar';
import { makeServer } from './server';
import { blueTheme } from './themes';
import debounce from 'lodash.debounce';


// use to mock service in development
if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}

function App() {
  let [characters, setCharacters] = useState([]);
  
  function handleSearch(searchedText) {
    debouncedSearch(searchedText)
  }

  function search(searchedText){
    getCharacters(searchedText).then((charactersRes) => {
      setCharacters(charactersRes);
    });
  }

  const debouncedSearch = useCallback(
		debounce(searchedText => search(searchedText), 500),
		[], // will be created only once initially
	);

  useEffect(() => {
    getCharacters().then((charactersRes) => {
      setCharacters(charactersRes);
    });
  }, [])

  return (
    <ThemeProvider theme={blueTheme}>
      <MarvelAppBar handleSearch={searchedText => handleSearch(searchedText)} />
      <CharactersGridList characters={characters} />
    </ThemeProvider>
  );
}

export default App;