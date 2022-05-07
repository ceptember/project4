import React from "react";
import { useState, useEffect } from "react"; 
import EditBook from "./EditBook";

function BookList(){

    const [books, setBooks] = useState([])
    const [bookToEdit, setBookToEdit] = useState(null)

    useEffect(()=>{
        fetch("/books")
        .then(resp => resp.json())
        .then(data => setBooks(data))
    }, [])

    function handleDelete(bookID){
     
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

    function closeEdit(){
        setBookToEdit(null)
    }

    return (
        <div>
            Book List 

            <ul>
                { books.map( (b) =>  
                    <li key={b.title}>
                        "{b.title}" by {b.author}, {b.year_published} 
                        {/* <button onClick={ (bookID) => handleDelete(b.id)}>✕</button> */}
                        <button  onClick={ ()=> setBookToEdit(b.id)}>✎</button>
                        { bookToEdit == b.id ? <EditBook book={b} handleDelete={handleDelete} closeEdit={closeEdit} /> : ""}
                    </li> )}
            </ul>
        </div>
    )
}

export default BookList 