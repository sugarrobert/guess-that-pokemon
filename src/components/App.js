import React, { useState } from "react";
import pokemon from "../images/pokemon.png";

function App() {
    const [isActive, setIsActive] = useState(false);

    const toggleBackground = () => {
        setIsActive(current => !current);
    }

    return (
        <div>
            <h1>Hello!!</h1>
            <img src={pokemon} alt="Pokeball" />
            <button onClick={toggleBackground}
                style={{
                    backgroundColor: isActive ? 'salmon' : '',
                    color: isActive ? 'white' : '',
                }}
            >Click me</button>
        </div>
    );
}

export default App;