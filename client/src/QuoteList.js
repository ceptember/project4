import React from "react";
import { useState, useEffect } from "react";

function QuoteList(){

    const [quotes, setQuotes] = useState([])

    useEffect( ()=>{
        fetch('/quotes')
        .then( resp => resp.json())
        .then( data => setQuotes(data))
    }, [])

    return(
        <div>
            Quote List

            <ul>
                { quotes.map( q => <li key={q.quote}> {q.quote} -{q.character.name} <button>✕</button><button>✎</button></li>)}
            </ul>
        </div>
    )
}

export default QuoteList