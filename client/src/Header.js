import React from 'react'
import { Link, NavLink} from "react-router-dom";


function Header ({isLoggedIn, user, handleLogout}) {
    return (
        <div>
          
       <h1> Wonderland API </h1>
     
      
      <NavLink className='link' to={"/"} >Home </NavLink>
      <NavLink className='link' to={"/documentation"}>Documentation </NavLink>
      { isLoggedIn? <NavLink className='link' to={"/admin"}>Admin</NavLink> : ""}
      { isLoggedIn?  <button onClick={ handleLogout} > Log out</button>: <NavLink className='link' to={"/login"} ><button>Login</button> </NavLink>  }
      <br />
      { isLoggedIn? "Welcome " + user + "!" : ""}
      
        </div>
    )
}

export default Header 