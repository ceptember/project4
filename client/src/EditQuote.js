import React from "react";
import { useState } from "react";

function EditQuote({quote, handleDelete, handleEdit, closeEdit}){

    const [quoteText, setQuoteText] = useState(quote.quote)
    const [characterID, setCharacterID] = useState(1) // placeholder, fix this later 
    const [bookID, setBookID] = useState(1) // placeholder, fix this later 


    function handleEditQuote(event){
        event.preventDefault()

        let quoteObj = {
            quote: quoteText, 
            character_id: characterID,
            book_id: bookID
        }

        handleEdit(quote.id, quoteObj)
    }

    function onDeleteClick(){
        handleDelete(quote.id)
    }


    return(
        <div className="edit">
        Edit  { quote.quote }
        <br />

        <form onSubmit={ e => handleEditQuote(e)}>
        Name: <input value={quoteText} onChange={ e => setQuoteText(e.target.value) }></input> 
            <br />
            Character: <input value={characterID} onChange={e => setCharacterID(e.target.value)}></input> 
            <br />
            Book: <input value={bookID} onChange={e => setBookID(e.target.value)}></input>
            <br />
            <br />
            <input type="submit"></input>
        </form>

        <br />
        Or delete quote from database: 
        <button onClick={onDeleteClick}> delete </button>
        <br />
        <button onClick={closeEdit}>cancel </button>
        
    </div>
    )
}

export default EditQuote; 