import React from "react";
import { useEffect, useState } from "react"

function EditBook( {book, handleDelete, handleEdit, closeEdit} ){

    const [title, setTitle] = useState(book.title)
    const [author, setAuthor] = useState(book.author)
    const [year, setYear] = useState(book.year_published)

    function handleEditBook(event){
        event.preventDefault()

        let bookObj = {
            title: title, 
            author: author, 
            year_published: year
        }

        handleEdit(book.id, bookObj)
    }

    function onDeleteClick(){
        handleDelete(book.id)
    }

    return(
        <div className="edit">
            Edit  { book.title }
            <br />

            <form onSubmit={ e => handleEditBook(e)}>
            Title: <input value={title} onChange={ e => setTitle(e.target.value) }></input> 
                <br />
                Author: <input value={author} onChange={e => setAuthor(e.target.value)}></input> 
                <br />
                Year Published: <input value={year} onChange={e => setYear(e.target.value)}></input>
                <br />
                <br />
                <input type="submit"></input>
            </form>

            <br />
            Or delete book from database: 
            <button onClick={onDeleteClick}> delete </button>
            <br />
            <button onClick={closeEdit}>cancel </button>
            
        </div>
    )
}

export default EditBook