import React from "react";
import {useState} from "react"; 
import { useHistory } from "react-router-dom"

function Login({handleLogin, error}){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    // const [error, setError] = useState(null)

    const history = useHistory()
    
  function submitLogin (e){
    e.preventDefault(); 
    handleLogin(username, password)
    setUsername("")
    setPassword("")

    history.push("/admin")
   
  }

    return(
        <div>

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
</div>

    )
}

export default Login