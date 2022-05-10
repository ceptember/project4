import React from 'react'
import { useState, useEffect } from 'react'
import BookList from './BookList'
import CharacterList from './CharacterList'
import QuoteList from './QuoteList'

function Admin(){

  
    const [characters, setCharacters] = useState([])
    const [books, setBooks] = useState([])
    const [nowViewing, setNowViewing] = useState("")

    // For new book, character, quote forms: 

    const [bTitle, setBTitle] = useState("")
    const [bAuthor, setBAuthor] = useState("")
    const [bYear, setBYear] = useState("")
    const [cName, setCName] = useState("")
    const [cSpecies, setCSpecies] = useState("")
    const [cHome, setCHome] = useState("")
    const [qQuote, setQQuote] = useState("")
    const [qCharacter, setQCharacter] = useState("Characters")
    const [qBook, setQBook] = useState("Books")



    useEffect( () => {
        fetch("/characters")
        .then( r => r.json())
        .then( data => setCharacters(data))
    }, [])

    useEffect( () => {
        fetch("/books")
        .then(r => r.json())
        .then( data => setBooks(data))
    }, [])

    // ***** BOOKS *********

    function handleNewBook(e){
        e.preventDefault() 
        let bookObj = {
            title: bTitle,
            author: bAuthor,
            year_published: bYear
        }

        fetch("/books", {
            method: "POST", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(bookObj) 
        })
        .then(r => r.json())
        .then(data => {
            let newBooks = [...books, data]
            setBooks(newBooks)
        })

        setBAuthor("")
        setBTitle("")
        setBYear("")
    }

    function deleteBook(bookID){
        fetch("/books/"+bookID, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then( data => {
            console.log(data)
            let newBooks = books.filter( b => b.id != bookID)
            setBooks(newBooks)
        })
    }

    function editBook(id, obj){
        fetch("/books/"+id, {
            method: "PATCH", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(obj)
        })
        .then( r => r.json())
        .then( data => {
            let otherBooks = books.filter( b => b.id != id)
            let newBooks = [...otherBooks, data]
            setBooks(newBooks)
        })
    } 

    // ****** CHARACTERS ******** 

    function handleNewCharacter(e){
        e.preventDefault() 
        let characterObj = {
            name: cName,
            species: cSpecies,
            home: cHome
        }

        fetch("/characters", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(characterObj)
        })
        .then(r => r.json())
        .then(data => console.log(data))

        setCName("")
        setCSpecies("")
        setCHome("")
    }


    function deleteCharacter(characterID){
        fetch("/characters/"+characterID, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then( data => {
            let newCharacters = characters.filter( c => c.id != characterID)
            setCharacters(newCharacters)
        })
    }

    function editCharacter(id, obj){
        fetch("/characters/"+id, {
            method: "PATCH", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(obj)
        })
        .then( r => r.json())
        .then( data => {
            let otherCharacters = characters.filter( c => c.id != id)
            let newCharacters = [...otherCharacters, data]
            setCharacters(newCharacters)
        })
    } 

    return (
        <div>
            <h2>Manage the Database  </h2>
            <h3> This form is only shown when the admin is logged in </h3>

            <h4>Add a new book:</h4>
            <form onSubmit={ e => handleNewBook(e)}>
            Title: <input value={bTitle} onChange={ e => setBTitle(e.target.value) }></input> 
                <br />
                Author: <input value={bAuthor} onChange={e => setBAuthor(e.target.value)}></input> 
                <br />
                Year Published: <input value={bYear} onChange={e => setBYear(e.target.value)}></input>
                <br />
                <input type="submit"></input>
            </form>

            <h4>Add a new character:</h4>
            <form onSubmit={ e => handleNewCharacter(e)}>
                Name: <input value={cName} onChange={e => setCName(e.target.value)}></input> 
                <br />
                Species: <input value={cSpecies} onChange={e => setCSpecies(e.target.value)}></input> 
                <br />
                Home: <input value={cHome} onChange={ e => setCHome(e.target.value)}></input>  
                <br />
                <input type="submit"></input>
            </form>

            <h4>Add a new quote:</h4>
            <form>
               Quote: <textarea value={qQuote} onChange={e => setQQuote(e.target.value)}></textarea>
               <br />
               
                <br />
                Character: <select value={qCharacter} onChange={ e => setQCharacter(e.target.value)} > 
                    <option selected disabled>Characters</option>
                    { characters.map( c => <option value={c.name}>{c.name}</option>)}
               
                </select>
                 
                <br />
                Book: <select value={qBook} onChange={e=> setQBook(e.target.value)}>
                    <option selected disabled>Books</option>
                    { books.map( b => <option value={b.title}>{b.title}</option> )}
                </select>
                <br />
                <input type="submit"></input>
            </form>
            <br />

            <h4> View the Database </h4>
            <button onClick={ () => setNowViewing("books")}>Books</button>
            <button onClick={ ()=> setNowViewing("characters")}>Characters</button>
            <button onClick={() => setNowViewing("quotes")}>Quotes</button>

            { nowViewing == "books" ?  <BookList booksFromAdmin={books} deleteBook={deleteBook} editBook={editBook}/> : "" }
            { nowViewing == "characters" ?  <CharacterList characters={characters} deleteCharacter={deleteCharacter} editCharacter={editCharacter}/> : "" }
            { nowViewing == "quotes" ? <QuoteList /> : ""}


        </div>   
    )
}

export default Admin 