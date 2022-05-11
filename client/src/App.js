import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Admin from './Admin';
import Footer from './Footer';

function App() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  function submitLogin (e){
    e.preventDefault(); 
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
    setUsername("")
    setPassword("")
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
      <Header />
      <Home />

    {/* MOVE THESE TO OTHER COMPONENTS */}
    <h2> Database Admin Sign-in</h2>
    <form onSubmit={submitLogin}>
      <label htmlFor="usernameInput">Username:</label>
      <input type="text" id="usernameInput" name="usernameInput" value={username} onChange={ e => setUsername(e.target.value)}></input>
      <br />

      <label htmlFor="passwordInput">Password:</label>
      <input type="password" id="passwordInput" name="passwordInput" value={password} onChange={ e => setPassword(e.target.value)}></input>
      <br />
      <input type="submit"></input>
      <br />
      {error}


    </form>

    <button onClick={ handleLogout} > Log out</button>
    <br />
   
    { isLoggedIn? "Welcome " + user + "!" : "Please log in" }

   { isLoggedIn?  <Admin /> : "" }
  

    <Footer />

    </div>
  );
}

export default App;
