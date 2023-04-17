import React, {useState} from "react";
import { Form } from "semantic-ui-react";

// Deliverable Form, Step 1: create state variables for each piece of the form

function PokemonForm({handleNewPoke}) {
  const [name, setName] = useState("")
  const [hp, setHp] = useState("")
  const [front, setFront] = useState("")
  const [back, setBack] = useState("")

// Deliverable Form, Step 4: Create a callback function passing in the event and creating a (newPoke) with the new data 

  const handleSubmit = (e) => {
  e.preventDefault()

  let newPoke = {
    name: name,
    hp: hp,
    sprites: {
      front: front,
      back: back
    }
  }

  // Deliverable Form, Step 5: Create a POST request as JSON, and un-convert it from JSON
  // Make sure all the keys come through in the DB JSON File!!

fetch("http://localhost:3001/pokemon", {
  method: 'POST',
  headers: {'Content-Type': 'application/json',
},
body: JSON.stringify(newPoke)
})
.then(resp => resp.json())
.then(shinyNewPoke => handleNewPoke(shinyNewPoke))
  }
// Deliverable Form, Step 6: Then, take the response and convert it into a (shinyNewPoke) variable
// Deliverable Form, Step 6: Create a callback function to pass in (shinyNewPoke) to the Pokemon Page Componenet
// where the Pokemons and setPokemons state lives & where we need to perform our final render
// Deliverable Form, Step 7: Send in our shinyNewPoke to handleNewPoke function - go to Pokemon Page Component now



  // Deliverable Form, Step 2: Add onChange event handlers to each piece of the form and set the state to the event target value, 
  // Don't forget to add the value key and set it to each variable's state
  // Deliverable Form, Step 3: Create an onSubmit handler on the whole div (the whole clickable image) and return a callback function

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={e => setName(e.target.value)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={e => setHp(e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={front}
            onChange={e => setFront(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={back}
            onChange={e => setBack(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
