import React, {useState, useEffect} from 'react'; 


function Home(){
  
    const [characters, setCharacters] = useState([])
    const [books, setBooks] = useState([])
    const [quotes, setQuotes] = useState([])

    const placeholderObj = {
        quote: "..."
    }

    
    const [randomCharacter, setRandomCharacter] = useState({})
    const [randomBook, setRandomBook] = useState({})
    const [randomQuote, setRandomQuote] = useState(placeholderObj)    
    
    const [charNumber, setCharNumber] = useState(1)
    const [bookNumber, setBookNumber] = useState(1)
    const [quoteNumber, setQuoteNumber] = useState(null)
    
  
      // ***** FETCH BOOKS, CHARACTERS, QUOTES 
      // Some of this is duplicated in Admin component. Go through later and put it all in this component. 
    useEffect( () => {
        fetch("/characters")
        .then( r => r.json())
        .then( data => {
            setCharacters(data)
            setCharNumber(Math.floor(Math.random() * data.length) )
        })
    }, [])

    useEffect( () => {
        fetch("/books")
        .then(r => r.json())
        .then( data => setBooks(data))
    }, [])

    useEffect( () => {
        fetch("/quotes")
        .then(r => r.json())
        .then( data => {
            setQuotes(data)
            setQuoteNumber(Math.floor(Math.random() * data.length) )
        })
    }, [])

    //Fetch a random entry 
    useEffect( () => {
        fetch("/quotes/"+quoteNumber)
        .then(r => r.json())
        .then( data => {
            setRandomQuote(data)
        })
    }, [quoteNumber])
    

    return(
        <div className='content'>
            <h2>Home  </h2>
           charNumber: {charNumber}
            <p> This web app is a REST API intended for other developers to use for text in their own projects.  </p>
            <h3> Available endpoints:</h3>
            <h4>Quotes:</h4>
            <p> Send requests to:
                <br /> <br />
                 <code>https://wonderland-api.herokuapp.com/quotes</code> <a href="https://wonderland-api.herokuapp.com/quotes" target="_blank" className="tryit"> TRY IT!  </a></p>
            
                 { quoteNumber? <span>https://wonderland-api.herokuapp.com/quotes/{quoteNumber} </span> : <span>Loading...</span>}
                 <br />
                 Response : <br /><br />
                <div className='responsePreview'>
                &#123; <br />
                "id": &nbsp; 
                { quoteNumber? <span>{quoteNumber} </span> : <span>""</span>}, 
                 <br />
                "quote": "{randomQuote ? randomQuote.quote : "Loading..."}"
                <br />
                &#125;
                </div>

            <h4>Characters:</h4>
            <p> Send requests to:
                <br /> <br />
                <code> https://wonderland-api.herokuapp.com/characters </code><a href="https://wonderland-api.herokuapp.com/characters" target="_blank" className="tryit"> TRY IT!  </a></p>
            
            <h4>Books:</h4>
            <p> Send requests to:
                <br /> <br />
                <code>  https://wonderland-api.herokuapp.com/books </code> <a href="https://wonderland-api.herokuapp.com/books" target="_blank" className="tryit"> TRY IT!  </a></p>
            

        </div>
    )
}

export default Home 