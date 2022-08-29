import { useState } from "react";

function CharacterSheet(props) {

  const [name, setName] = useState("")

  return (
    <div>
      <form autoComplete="off" onSubmit={event => event.preventDefault}>
        <input
          name="name"
          type="text"
          placeholder="Enter your character's name"
          value={name}
          onChange={event => {
            setName(event.target.value);
          }}
        />
      </form>
    </div>

  );
}

export default CharacterSheet