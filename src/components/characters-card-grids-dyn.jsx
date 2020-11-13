import React, { useState, useEffect } from "react"
import { getCharacters } from "../services/marvel-characters-service";
import CharactersGridList from "./characters-grid-list";

export default function CharactersCardGridsDyn() {
    let [characters, setCharacters] = useState([])
  
    useEffect(() => {
        getCharacters().then((charactersRes) => {
            setCharacters(charactersRes);
          });
    }, [])
  
    return (
      <CharactersGridList characters={characters} cols={3} />
    )
  }