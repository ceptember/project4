import React from 'react'; 

function Home(){
    return(
        <div>
            <h2>Home  </h2>
            <p> This web app is a REST API intended for other developers to use for text in their own projects.  </p>
            <h3> Available endpoints:</h3>
            <h4>Quotes</h4>
            <p> url/quotes (will edit this with url after deploying to Heroku) <a href="http://localhost:3000/quotes" > TRY IT!  </a></p>
            
            <h4>Characters</h4>
            <p> url/characters (will edit this with url after deploying to Heroku) <a href="http://localhost:3000/characters" > TRY IT!  </a></p>
            
            <h4>Books</h4>
            <p> url/books (will edit this with url after deploying to Heroku) <a href="http://localhost:3000/books" > TRY IT!  </a></p>
            

        </div>
    )
}

export default Home 