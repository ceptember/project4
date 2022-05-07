import React from "react";
import { useState, useEffect } from "react";

function CharacterList(){

    const [characters, setCharacters] = useState([])
    useEffect( ()=>{
        fetch('/characters')
        .then(resp => resp.json())
        .then(data => setCharacters(data) )
    }, [])

    return(
        <div>
            Character List 
            <ul>
                { characters.map( c => <li key={c.name}> {c.name} </li>) }
            </ul>
        </div>
    )
}

export default CharacterList