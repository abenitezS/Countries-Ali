 import React from  "react";


 export default function Card({ name, bandera , continent}){
    return (
        <div>
            <h3>{name}</h3>
            <h5>{continent}</h5>
            <img src={bandera} alt='img not found' with ="200px" heigth="250px"/>
        </div>
    )
 }

