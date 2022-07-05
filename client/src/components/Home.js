import React from 'react'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCountries} from '../actions'
import {Link} from 'react-router-dom'
import Card from '../components/Card'

export default function Home(){
  const dispatch= useDispatch() //para ir despachando mis acciones 
    // esta hook es lo mismo que hacer mapdispatchToProps y traerme los prop es mas directo
  const allCountries= useSelector(state=>state.countriesall)// traeme todo lo que esta en el estado de countries y guardamenlo en allcountries
    // traerme del estado cuando se monte los Paises , es lo mismo que hacer componentDidMount 
  useEffect( () => {  dispatch(getCountries()); // es lo mismo que hacer mapDispatchToProps
    },[dispatch] );//mientras este un estado o dependencia, como no depende de nada se monta sin problema
    //para prevenite errores que me renderice la pagina si toco volver a cargar
  
  function handlerlClick(e){
    e.preventDefault();
    dispatch(getCountries());
      }
    //renderizamos 
      return(  
        <div> 
          {/* <Link to= '/countries'> Paises</Link> */}
          <h1>PAISES DEL MUNDO </h1>
       
          
          <button onclick={e=>{handlerlClick(e)}}>
              Volver a cargar 
          </button>
        <div>
            <select>
            <option value='asc'>Ascedente</option>
            <option value='desc'>Descedente</option>   
           </select>
           <select>
            <option value='Continent'>Continente</option>
            <option value='name'>Actividad Turistica</option> 
            <option value='name'>Alfabeticamente</option>
            <option value='Population'>Cantidad de Poblacion </option>
          </select>
          {
            allCountries?.map((e) => {

              return (
                <fragment>
                  <Link to={"/home/"+ e.idCountry }>
                    <Card name={e.name} bandera={e.bandera} continent={e.continent} key={e.idCountry}/>
                  </Link>
                </fragment>
            )
           })
             }
        </div>
        </div>
      )
    }
    