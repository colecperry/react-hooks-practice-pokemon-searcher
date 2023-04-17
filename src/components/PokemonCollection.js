import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

// Deliverable RenderPokemons, Step 3: Accept new "pokemons" state as props from Pokemon Page component,
// create variable pokemonsRender, map through pokemons, return each individual pokemon, and pass down 
// individual poke's props and a key, call that variable inside the JSX return where the Pokemon Card would be


function PokemonCollection({pokemons}) {
  const pokemonsRender = pokemons.map((poke) => {
    return <PokemonCard poke={poke} key={poke.id}/>
  })

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemonsRender}
    </Card.Group>
  );
}

export default PokemonCollection;
