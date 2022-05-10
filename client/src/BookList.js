import React from "react";
import { useState, useEffect } from "react"; 
import EditBook from "./EditBook";

function BookList({booksFromAdmin, deleteBook, editBook}){

    const [books, setBooks] = useState([])
    const [bookToEdit, setBookToEdit] = useState(null)

    // useEffect(()=>{
    //     fetch("/books")
    //     .then(resp => resp.json())
    //     .then(data => setBooks(data))
    // }, [])

    function handleDelete(bookID){
        deleteBook(bookID)
    }

    function handleEdit(id, obj){
        editBook(id, obj)
        closeEdit()
    }

    function closeEdit(){
        setBookToEdit(null)
    }

    return (
        <div>
            Book List 

            <ul>
                { 

                //  books.map( (b) =>  
                    booksFromAdmin.map( (b) => 
                    <li key={b.title}>
                        "{b.title}" by {b.author}, {b.year_published} 
                        <button  onClick={ ()=> setBookToEdit(b.id)}>✎</button>
                        { bookToEdit == b.id ? <EditBook book={b} handleDelete={handleDelete} handleEdit={handleEdit} closeEdit={closeEdit} /> : ""}
                    </li> )}
            </ul>
        </div>
    )
}

export default BookList 