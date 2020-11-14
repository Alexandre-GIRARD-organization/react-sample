import React, { useEffect, useState } from 'react';
import './App.css';
import { Link, Typography } from '@material-ui/core';
import { makeServer } from "./server"
import CharactersGridList from './components/characters-grid-list';
import { getCharacters } from './services/marvel-characters-service';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    <div className="App">
      <header className="App-header">
        <CharactersGridList characters={characters} />

        <Copyright />
      </header>
    </div>
  );
}

export default App;
