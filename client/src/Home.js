import React, {useState, useEffect} from 'react'; 


function Home(){
  
    const [characters, setCharacters] = useState([])
    const [books, setBooks] = useState([])
    const [quotes, setQuotes] = useState([])

    const [randomCharacter, setRandomCharacter] = useState({})
    const [randomBook, setRandomBook] = useState({})
    const [randomQuote, setRandomQuote] = useState(null)  
    const [randomQuoteCharacter, setRandomQuoteCharacter] = useState(null)  
    const [randomQuoteBook, setRandomQuoteBook] = useState(null)  

    
    const [characterNumber, setCharacterNumber] = useState(1)
    const [bookNumber, setBookNumber] = useState(1)
    const [quoteNumber, setQuoteNumber] = useState(null)
    
  
      // ***** FETCH BOOKS, CHARACTERS, QUOTES 
      // Some of this is duplicated in Admin component. Go through later and put it all in this component. 
    useEffect( () => {
        fetch("/characters")
        .then( r => r.json())
        .then( data => {
            setCharacters(data)
            setCharacterNumber(Math.floor(Math.random() * data.length) )
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
            if (data){
                setRandomQuoteCharacter(data.character.name)
                setRandomQuoteBook(data.book.title)
            } 
            else {
                console.log("data loading...")
            }
        })
    }, [quoteNumber])

    useEffect( () => {
        fetch("/characters/"+characterNumber)
        .then(r => r.json())
        .then( data => {
            setRandomCharacter(data)
        })
    }, [characterNumber])

    useEffect( () => {
        fetch("/books/"+bookNumber)
        .then(r => r.json())
        .then( data => {
            setRandomBook(data)
        })
    }, [bookNumber])

    return(
        <div className='content'>
            <h2>Welcome!   </h2>
            <p> This free REST API provides quotes from the works of Lewis Carroll for deveoplers to use in their projects. 
                Keep reading to see a list of available endpoints and a demonstration of the responses they send back. 
                Feel free to use this API in any project where you need sample filler text, such as a demonstration of a chat app, social platform, or review page. 
                Happy coding!  </p>
            <h2> Available endpoints:</h2>
            <h3>Quotes:</h3>
            <p> Get one quote:
                <br /> <br />
                <div className='responsePreview'>
                    { quoteNumber? <span>https://wonderland-api.herokuapp.com/quotes/{quoteNumber} </span> : <span>Loading...</span>}
                </div> 
                <a href={"https://wonderland-api.herokuapp.com/quotes/"+quoteNumber} target="_blank" className="tryit"> open  </a></p>
            
                 <br />
                 Response Preview: <br /><br />
                <div className='responsePreview'>
                &#123; <br />
                "id": &nbsp; 
                { quoteNumber? <span>{quoteNumber} </span> : <span>""</span>}, 
                 <br />
                "quote": "{randomQuote ? randomQuote.quote : "Loading..."}",
                <br />
                "character": &#123; "name": {randomQuoteCharacter} &#125;,
                 <br />
                 "book": &#123; "title": {randomQuoteBook} &#125;
                 <br />&#125;
                 </div>
                <br /><br />
              
                Get all the quotes: 
                <br /><br />
                <div className='responsePreview'>
                    https://wonderland-api.herokuapp.com/quotes
                </div> 
                <a href="https://wonderland-api.herokuapp.com/quotes/" target="_blank" className="tryit"> open  </a>


                <h3>Characters:</h3>
                <p> Get one character:
                <br /> <br />
                <div className='responsePreview'>
                    { characterNumber? <span>https://wonderland-api.herokuapp.com/character/{characterNumber} </span> : <span>Loading...</span>}
                </div> 
                <a href={"https://wonderland-api.herokuapp.com/characters/"+characterNumber} target="_blank" className="tryit"> open  </a></p>
            
                 <br />
                 Response Preview: <br /><br />
                <div className='responsePreview'>
                &#123; <br />
                "id": &nbsp; 
                { characterNumber? <span>{characterNumber} </span> : <span>""</span>}, 
                 <br />
                "name": "{randomCharacter ? randomCharacter.name : "Loading..."}",
                <br />
                "species": "{randomCharacter ? randomCharacter.species : "Loading..."}",
                 <br />
                 "home":  "{randomCharacter ? randomCharacter.home : "Loading..."}"
                 <br />&#125;
                 </div>
                <br /><br />
              
                Get all the characters: 
                <br /><br />
                <div className='responsePreview'>
                    https://wonderland-api.herokuapp.com/characters
                </div> 
                <a href="https://wonderland-api.herokuapp.com/characters/" target="_blank" className="tryit"> open  </a>

                

                

        </div>
    )
}

export default Home 