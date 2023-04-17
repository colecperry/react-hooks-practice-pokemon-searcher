import React, {useState} from "react";
import { Card } from "semantic-ui-react";

// Deliverable RenderPokemon, Step 4: Accept (poke) state from Pokemon Collection for each poke

function PokemonCard({poke}) {
  const [showFront, setShowFront] = useState(true)

// ^ Deliverable FlipSprites, Step 1: Create a piece of state to flip between front and back images

const handleSprites = () => {
  setShowFront(!showFront)
}
// ^ Deliverable FlipSprites, Step 3: Create a function to toggle state from true to false

// Deliverable RenderPokemon, Step 5(end): Render poke info by accessing each poke (poke.name, hp, and sprites)
// Deliverable FlipSprites, Step 2: Add onclick listener to the whole card container, pointing back to a callback function
// Deliverable FlipSprites, Step 4(end): Create a ternary saying: If show front is true, show the front image from accessing 
// the object's front sprites picture, if showFront is false, show the back picture
  return (
    <Card>
      <div onClick={handleSprites}>
        <div className="image">
          <img alt="oh no!" src={showFront ? poke.sprites.front : poke.sprites.back}/>
        </div>
        <div className="content">
          <div className="header">{poke.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poke.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
