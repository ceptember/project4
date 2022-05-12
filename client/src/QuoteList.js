import React from "react";
import { useState, useEffect } from "react";
import EditQuote from "./EditQuote";

function QuoteList({quotes, deleteQuote, editQuote}){

    const [quoteToEdit, setQuoteToEdit] = useState(null)

    function handleDelete(quoteID){
        deleteQuote(quoteID)
    }

    function handleEdit(id, obj){

        editQuote(id, obj)
        closeEdit()
    }

    function closeEdit(){
        setQuoteToEdit(null)
    }

    return(
        <div>
            Quote List
            <ul>
                { quotes.map( (q) => 
                    <li key={q.quote}> "{q.quote}" -{q.character.name} 
                   {/* <li key={q.quote}> "{q.quote}" - */}
                    <button  onClick={ ()=> setQuoteToEdit(q.id)}>✎</button>
                    { quoteToEdit == q.id ? <EditQuote quote={q} handleDelete={handleDelete} handleEdit={handleEdit} closeEdit={closeEdit} /> : ""}
                    </li>)}
            </ul>
        </div>
    )
}

export default QuoteList