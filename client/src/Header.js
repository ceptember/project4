import React from 'react'
import { Link, NavLink} from "react-router-dom";
import whiterabbit from './whiterabbit.jpg'


function Header ({isLoggedIn, user, handleLogout}) {
    return (
        <div id="header">
          
      
     
      <div id="navbar"> 
        <NavLink className='navlink' to={"/"} >Home </NavLink>
        <NavLink className='navlink' to={"/documentation"}>Documentation </NavLink>
        { isLoggedIn? <NavLink className='navlink' to={"/admin"}>Admin</NavLink> : ""}
        {/* { isLoggedIn?  <button onClick={ handleLogout} className='logbtn' > Log out</button>: <NavLink className='navlink' to={"/login"} ><button className='logbtn'>Login</button> </NavLink>  } */}
        { isLoggedIn?  <NavLink className='navlink' to={"#"} onClick={ handleLogout}  > Log out</NavLink>: <NavLink className='navlink' to={"/login"} >Login </NavLink>  }

      </div>
      <br />
      { isLoggedIn? "Welcome " + user + "!" : '\u00A0'}

      <div id="logo-div">
        <img src={whiterabbit} id="rabbit1" />
        <div id="h1-container"><h1> Wonderland API </h1></div>
        <img src={whiterabbit} id="rabbit2" />
      </div>


        </div>
    )
}

export default Header 