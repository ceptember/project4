import React from "react";
import { useState, useEffect } from "react";
import EditCharacter from "./EditCharacter";

function CharacterList({characters, deleteCharacter, editCharacter}){

    const [characterToEdit, setCharacterToEdit] = useState(null)

    function handleDelete(characterID){
        deleteCharacter(characterID)
    }

    function handleEdit(id, obj){
        editCharacter(id, obj)
        closeEdit()
    }

    function closeEdit(){
        setCharacterToEdit(null)
    }

    return(
        <div>
            Character List 
            <ul>
                { characters.map( (c) => 
                    <li key={c.name}> 
                        {c.name}, {c.species} from {c.home} 
                        <button  onClick={ ()=> setCharacterToEdit(c.id)}>✎</button>
                        { characterToEdit == c.id ? <EditCharacter character={c} handleDelete={handleDelete} handleEdit={handleEdit} closeEdit={closeEdit} /> : ""}


                    </li>) }
            </ul>
        </div>
    )
}

export default CharacterList