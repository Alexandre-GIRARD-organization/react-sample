import React, { useEffect, useState } from 'react';
import './App.css';
import CharactersGridList from './components/characters/characters-grid-list';
import { getCharacters } from './services/marvel-characters-service';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import MarvelAppBar from './components/layout/marvel-app-bar';


if (process.env.NODE_ENV === "development") {
  //makeServer({ environment: "development" })
}



const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  let [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharacters().then((charactersRes) => {
      setCharacters(charactersRes);
    });
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <MarvelAppBar />
      <CharactersGridList characters={characters} />
    </ThemeProvider>
  );
}

export default App;