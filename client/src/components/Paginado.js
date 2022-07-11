import React from 'react'
export default function Paginado({countriesPerPage, allCountries, paginado}){
    const pageNumbers=[]
    for (let i = 0; i < Math.ceil(allCountries/countriesPerPage); i++) {
        pageNumbers.push(i); // cargo las paginas en un array
    }
    return (
        <nav>
            <ul >
                {pageNumbers && 
                pageNumbers.map(number=> (
                    <li key={number}>
                        <a onClick={()=>paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )

}