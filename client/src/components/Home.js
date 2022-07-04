import React from 'react'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCountries} from '../actions'
import {Link} from 'react-router-dom'
import Card from '../components/Card'

export default function Home(){
    const dispatch=useDispatch() //para ir despachando mis acciones 
    // esta hook es lo mismo que hacer mapdispatchToProps y traerme los prop es mas directo
    const allCountries=useSelector((state)=>state.countries)// traeme todo lo que esta en el estado de countries y guardamenlo en allcountries
    // traerme del estado cuando se monte los Paises , es lo mismo que hacer componentDidMount 
         useEffect( () => {  
           dispatch(getCountries()) // es lo mismo que hacer mapDispatchToProps
            },[],  //mientras este un estado o dependencia, como no depende de nada se monta sin problema 
                   );
    //para prevenite errores que me renderice la pagina si toco volver a cargar
      function handeClick(e){
        e.preventDefault();
        dispatch(getCountries());
      }
    //renderizamos 
      return(  
        <div>
          <h1>PAISES DEL MUNDO </h1>
          <Link to= '/countries'> Paises</Link>
          <Link to= '/Activity'> Crear Activitidad</Link>
          <button onclick={e=>{handeClick(e)}}>
              Volver a cargar 
          </button>
          {/* Generamos los filtros */}
            <select>
              <option value='asc'>Ascedente</option>
              <option value='desc'>Descedente</option>   
            </select>
            <select>
              <option value='Continent'>Continente</option>
              <option value='all'>Actividad Turistica</option> 
              <option value='all'>Alfabeticamente</option>
              <option value='Population'>Cantidad de Poblacion </option>
            </select>
            {
               allCountries && allCountries.map(e => {
              <Card name= {e.name} bandera={e.bandera} continent={e.continent}/>
             })

            }
            

        </div>

      )
    }
    