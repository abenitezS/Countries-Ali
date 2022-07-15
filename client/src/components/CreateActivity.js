import React, {useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';
import {postActivity,getCountries} from '../actions'; //debo crearlas
import { useDispatch, useSelector } from "react-redux";

export default function CreateActivity(){
    const dispatch=useDispatch()
    const history=useHistory() //redirigime  a la ruta que te diga 
    const countries=useSelector((state)=>state.countries)

    const [input, setInput]=useState({
        name:'',
        dificultad:'',
        duracion:'',
        temporada:'',
        countries:[]
    })


function handelchange(e) {
  setInput({
    ...input,
    [e.target.name]: e.target.value
  })
  console.log(input)
}


function handelCheck(e) {
  if (e.target.checked)
  setInput({
    ...input,
    temporada: e.target.value
  })
  console.log(input)
}


function handelchange(e) {
  setInput({
    ...input,
    [e.target.name]: e.target.value
  })
  console.log(input)
}

function handelSelect(e) {
  setInput({
    ...input,
    countries:[...input.countries,e.target.value] 
  })
  console.log(input)
}

function handelSummnit(e) {
  e.preventDefault()
  console.log(input)
  dispatch(postActivity(input))
  alert("Actividad Creada")
  setInput({
    name:'',
    dificultad:'',
    duracion:'',
    temporada:'',
    countries:[]
  })
  history.push('/home')
}

useEffect(()=>{ dispatch(getCountries()) },[]);

 return (
    <div>
      <Link to ='/home'><button>Volver</button></Link>
      <h1>Crear Actividad</h1>
      <form   onSubmit={(e)=>handelSummnit(e)} >
        <div>
        <label>Nombre</label>
        <input type="text" value={input.name} name = "name"  onChange={handelchange}/>
       </div>
      <div>
        <label>Dificultad</label>
        <input type="text" value={input.dificultad} name = "dificultad" onChange={handelchange} />
      </div>
      <div>
        <label>Duracion</label>
        <input type="text" value={input.duracion} name = "duracion" onChange={handelchange}/>
      </div>      
      <div>
        <label>Temporada</label>
        <label> <input type="checkbox" value='Verano' name = "Verano" onChange={(e)=>handelCheck(e)} />Verano  </label>
        <label> <input type="checkbox" value='Primavera' name = "Primavera" onChange={(e)=>handelCheck(e)} />Primavera </label>
        <label> <input type="checkbox" value='Otoño' name = "Otoño" onChange={(e)=>handelCheck(e)}/>Otoño</label>
        <label> <input type="checkbox" value='Invierno' name = "Invierno" onChange={(e)=>handelCheck(e)} />Invierno</label>  
      </div>
      <select onChange={(e)=>handelSelect(e)}>
        {countries.map((el)=>(
          <option value={el.idCountry}>{el.name}</option>
        ))
        }
      </select>
      <ul><li> {input.countries.map(el=>el +',')} </li></ul>
      <button type="submit" >Crear Actividad</button>
   </form>
    </div>
   )
}