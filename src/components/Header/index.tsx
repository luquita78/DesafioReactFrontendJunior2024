import React from "react";
import "./index.css";

function Header () {
    return(
        <header className="header">
        <h1>todos</h1>
        <input className="new-todo"
        placeholder="Oque Precisa ser feito" 
        autoFocus/>
        </header>
    )
}

export default Header;