import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import Header from './Header';
import Home from './Home';
import Admin from './Admin';
import Login from './Login';
import Documentation from './Documentation';
import Footer from './Footer';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

 

  function submitLogin (username, password){
    fetch("/login", {
      method: "POST", 
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({username, password})
    }).then( (r) => {
        if (r.ok) {
          r.json().then((data) => {
            setUser(data.username)
            setIsLoggedIn(true)
          });
        } else {
          r.json().then((err) => {
            setError(err.error)

          });
        }
    })
    
     setError(null)
  }

  // check to see if user is in the sessions when page loads
  useEffect( () => {
    fetch("/me")
      .then( (r) => r.json())
      .then( (data) => {
        if (data.username) {
          setUser(data.username)
          setIsLoggedIn(true)
          setError(null)
        }
      })
  }, [])

  function handleLogout(){
    console.log("logging out...")
    fetch("/logout", {
      method: "DELETE" 
    })
      .then( resp => resp.json())
      .then( data => {
        setUser(null)
        setIsLoggedIn(false)
      }) 
  }



  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} user={user} handleLogout={handleLogout}/>
     
    <Route exact path="/">
      <Home />
    </Route>

    <Route path="/login">
      <Login  handleLogin={submitLogin} error={error}/>
    </Route>

    <Route path="/documentation">
      <Documentation />
    </Route>

    
     <Route path="/admin">
     { isLoggedIn?  <Admin /> : <div><h3>Please Log In</h3> <NavLink className='link' to={"/login"} > Login </NavLink> </div>  }
     </Route>
    

    <br />
   
   

  
  


    <Footer />

    </div>
  );
}

export default App;
