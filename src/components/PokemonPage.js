import React, { useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [searchInput, setSearchInput] = useState("")
// Deliveable Search, Step 3: Lift searchInput state to Pokemon page where we will peform our final render

// Deliverable RenderPokemon, Step 1: use useEffect hook to fetch pokemons and set state from pokemons array

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(resp => resp.json())
    .then(setPokemons)
  }, [])

  // Deliverable Form, Step 7: Since our Pokemons state lives here, take in shinyNewPoke to create 
  // a function to add our new pokemon to the page. Set Pokemons' state to the existing pokemons array 
  // plus our new (shinyNewPoke). Don't forget to pass down handleNewPoke as props to the pokemon form to render

  const handleNewPoke = (shinyNewPoke) => {
    setPokemons([...pokemons, shinyNewPoke])
    }

  // Deliverable Search, Step 4: create a variable called filterPokemon, and if searchInput equals an empty string, 
  // return the original state pokemons, and if it doesn't equal an empty string, filter through each poke,
  // and provides a few array of pokemon that only include text(from name) from what we typed in (searchInput state)
    const filterPokemon = () => {
      if (searchInput === "") {
        return pokemons 
      } else {
      return pokemons.filter((poke) => {
        return poke.name.toLowerCase().includes(searchInput.toLowerCase())
      })
    }
  }
  


  // Deliverable RenderPokemon, Step 2: pass down new updated state, pokemons
  // Deliverable Search, Step 5: Pass in new filterPokemons variable into the pokemon collection,
  // and call the function to render!
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleNewPoke={handleNewPoke}/>
      <br />
      <Search setSearchInput={setSearchInput} searchInput = {searchInput}/>
      <br />
      <PokemonCollection pokemons={filterPokemon()}/>
    </Container>
  );
}

export default PokemonPage;
