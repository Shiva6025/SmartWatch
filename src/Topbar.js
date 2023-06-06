import React from "react";
import classes from './Topbar.module.css'

const Topbar = () =>{
    return(
        <header>
        <nav className={classes.Topbar}>
        <img src='https://th.bing.com/th/id/OIP.QDgivdKPRSgdQhTml5g8ngHaE9?w=280&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7' alt='Amazon Logo'/>
       </nav>
       </header>
    )
}

export default Topbar;