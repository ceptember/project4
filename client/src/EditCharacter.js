import React from "react";
import { useEffect, useState } from "react"

function EditCharacter( {character, handleDelete, handleEdit, closeEdit} ){

    const [name, setName] = useState(character.name)
    const [species, setSpecies] = useState(character.species)
    const [home, setHome] = useState(character.home)

    function handleEditCharacter(event){
        event.preventDefault()

        let characterObj = {
            name: name, 
            species: species,
            home: home
        }

        handleEdit(character.id, characterObj)
    }

    function onDeleteClick(){
        handleDelete(character.id)
    }

    return(
        <div className="edit">
            Edit  { character.name }
            <br />

            <form onSubmit={ e => handleEditCharacter(e)}>
            Name: <input value={name} onChange={ e => setName(e.target.value) }></input> 
                <br />
                Species: <input value={species} onChange={e => setSpecies(e.target.value)}></input> 
                <br />
                Home: <input value={home} onChange={e => setHome(e.target.value)}></input>
                <br />
                <br />
                <input type="submit"></input>
            </form>

            <br />
            Or delete character from database: 
            <button onClick={onDeleteClick}> delete </button>
            <br />
            <button onClick={closeEdit}>cancel </button>
            
        </div>
    )
}

export default EditCharacter