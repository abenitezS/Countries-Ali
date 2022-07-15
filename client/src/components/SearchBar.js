import React from 'react'
import {useState} from 'react'
import {useDispatch} from react-redux
import {geCountriesName} from '../actions'

export default function SearchBar () {
const dispatch =useDispatch()
const [name,setName]=useState('')

function handleInputChange(e){
    e.prevenDefault()
    setName(e.target.value)
    console.log(name)
}
function handelSubmit(e) {
    e.prevenDefault()
    dispatch(geCountriesName)
}

return (
  <div>
      <input 
            type='text'
            placeholder='Bucar...'   
            onChange={(e)=>handleInputChange(e)} 
            />
     <button type='submit' on Click={(e)=>handelSubmit(e)} >Buscar</button>
            
          

        </div>
    )
}