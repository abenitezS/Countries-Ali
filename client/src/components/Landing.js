import React from "react";
import { Link } from "react-router-dom";
export default function LandingPage(){
    return (
    <div>
        <h1> Bienvenidos a la consulta de Paises </h1>
        <Link to='/home'> 
            <button> Ingresar </button>
        </Link>
    </div>

    )
    
}