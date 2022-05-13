import React from 'react'; 

function Home(){
    return(
        <div>
            <h2>Home  </h2>
            <p> This web app is a REST API intended for other developers to use for text in their own projects.  </p>
            <h3> Available endpoints:</h3>
            <h4>Quotes:</h4>
            <p> Send requests to https://wonderland-api.herokuapp.com/quotes <a href="https://wonderland-api.herokuapp.com/quotes" > TRY IT!  </a></p>
            
            <h4>Characters:</h4>
            <p> Send requests to https://wonderland-api.herokuapp.com/characters <a href="https://wonderland-api.herokuapp.com/characters" > TRY IT!  </a></p>
            
            <h4>Books:</h4>
            <p> Send requests to https://wonderland-api.herokuapp.com/books <a href="https://wonderland-api.herokuapp.com/books" > TRY IT!  </a></p>
            

        </div>
    )
}

export default Home 