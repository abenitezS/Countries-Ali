import React from "react";
import {Link, Routes}  from "react-router-dom";
export default function LandingPage(){
    return (
    <div>
        <h1> BIENVENIDOS A LA CONSULTA DE PAISES </h1>
        <Link to={'/home'}> 
            <button>Ingresar</button>
        </Link>
    </div>

    )
    
}