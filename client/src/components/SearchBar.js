import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {getCountriesName} from '../actions'

export default function SearchBar () {
const dispatch =useDispatch()
const [name,setName]=useState('')

function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value)
    console.log(name)
}
function handelSubmit(e) {
    e.preventDefault()
    dispatch(getCountriesName(name))
    setName('');
    
}

return (
  <div>
      <input 
            type='text'
            placeholder='Bucar...'   
            onChange={(e)=>handleInputChange(e)} 
            />
     <button type='submit' onClick={(e)=>handelSubmit(e)} >Buscar</button>
 </div>
    )
}