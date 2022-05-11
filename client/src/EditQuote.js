import React from "react";
import { useState, useEffect } from "react";

function EditQuote({quote, handleDelete, handleEdit, closeEdit}){

    const [quoteText, setQuoteText] = useState(quote.quote)
    const [characterID, setCharacterID] = useState(quote.character_id) 
    const [bookID, setBookID] = useState(quote.book_id) 
    const [characters, setCharacters] = useState([])
    const [books, setBooks] = useState([])


    useEffect( ()=>{
        fetch('/characters')
            .then(resp => resp.json())
            .then(data => setCharacters(data)) 
    }, [])

    useEffect( ()=>{
        fetch('/books')
            .then(resp => resp.json())
            .then(data => setBooks(data)) 
    }, [])

    function handleEditQuote(event){
        event.preventDefault()

        let quoteObj = {
            quote: quoteText, 
            character_id: characterID,
            book_id: bookID
        }

        console.log("from editQuote: " + quote.character.name + " " + quote.book_id)

        handleEdit(quote.id, quoteObj)
    }

    function onDeleteClick(){
        handleDelete(quote.id)
    }


    return(
        <div className="edit">
        Edit Quote
        <br />

        <form onSubmit={ e => handleEditQuote(e)}>
        Quote: <textarea value={quoteText} onChange={ e => setQuoteText(e.target.value) }></textarea> 
            <br />
            {/* Character: <input value={characterID} onChange={e => setCharacterID(e.target.value)}></input>  */}
            Character: 
            <select value={characterID} onChange={ e => setCharacterID(e.target.value)} > 
                <option selected disabled>Characters</option>
                { characters.map( c => <option value={c.id} key={c.id}>{c.name}</option>)}
            </select>
            <br />
            Book: 
            <select value={bookID} onChange={ e => setBookID(e.target.value)} > 
                <option selected disabled>Books</option>
                { books.map( b => <option value={b.id} key={b.id}>{b.title}</option>)}
            </select>
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