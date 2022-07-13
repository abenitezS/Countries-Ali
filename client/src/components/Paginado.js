import React from 'react'
import '../components/Paginado.css'
export default function Paginado({countriesPerPage, allCountries, paginado}){
    const pageNumbers=[]
    for (let i = 0; i < Math.ceil(allCountries/countriesPerPage); i++) {
        pageNumbers.push(i+1); // cargo las paginas en un array
    }
    return (
        <nav>
            <ul >
                {pageNumbers && 
                pageNumbers.map(number=> (
                    <li className='paginado' key={number}>
                        <a  className='pag_a' onClick={()=>paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )

}