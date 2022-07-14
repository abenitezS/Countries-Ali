import React from 'react'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCountries,filterCountriesByContinent, ordersByPopulation, OrderByName} from '../actions'
import {Link} from 'react-router-dom'
import Card from '../components/Card'
import Paginado from './Paginado'

export default function Home(){
  const dispatch= useDispatch() //para ir despachando mis acciones 

// esta hook es lo mismo que hacer mapdispatchToProps y traerme los prop es mas directo
const allCountries= useSelector(state=>state.countries)// traeme todo lo que esta en el estado de countries y guardamenlo en allcountries
// traerme del estado cuando se monte los Paises , es lo mismo que hacer componentDidMount 
const [orden,setOrden]=useState('')
//estados para el paginado 
const[currentPage,setCurrentPage]=useState(1)  // mi pagina actual que arranca en 1
const[countriesPerPage,setCountriesPerPage]=useState(9) // paises por pagina siempre seran 9
const indexOfLastCountries=currentPage * countriesPerPage //9
const indexOfFirstCountries= indexOfLastCountries - countriesPerPage //0
const currentCountries=allCountries.slice(indexOfFirstCountries,indexOfLastCountries)// me da los paises para mi pagina actual

const paginado = (pageNumber)=>{  // me va a servit para el renderizado
  setCurrentPage(pageNumber)
}



  useEffect( () => {  dispatch(getCountries()); // es lo mismo que hacer mapDispatchToProps
    },[dispatch] );//mientras este un estado o dependencia, como no depende de nada se monta sin problema
    //para prevenite errores que me renderice la pagina si toco volver a cargar
  

  
   function handlerlClick(e){
    e.preventDefault();
    dispatch(getCountries());
      }

  function  handelfilterContinent(e){
    e.preventDefault()
    dispatch(filterCountriesByContinent(e.target.value));
    setCurrentPage(1);
   
  }
   
  function handleOrderByName(e){
    e.preventDefault()
    dispatch(OrderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`) //me sirve para que modifique el estado local y se renderice
  }

  function  handelOrderPopulation(e){
    e.preventDefault()
    dispatch(ordersByPopulation());
   
  }
  

    //renderizamos 
      return(  
        <div> 
          <Link to= '/countries'> Paises</Link> 
          <h1>PAISES DEL MUNDO </h1>
       
          
          <button onClick={e=>handlerlClick(e)}>
              Volver a cargar 
          </button>
        <div>
          
           <select onChange={e=>handelfilterContinent(e)}>
           <option value='All'>Todos</option>
           <option value='Africa'>Africa</option>
            <option value='Asia'>Asia</option>  
            <option value='North America'>North America</option>
            <option value='South America'>South America</option> 
            <option value='Antartica'>Antartica</option> 
            <option value='Oceania'>Oceania</option> 
            <option value='Europe'>Europa</option> 
           </select>

           <button onClick={e=>handelOrderPopulation(e)}>
              Poblacion
          </button>

          <select onChange={e => handleOrderByName(e)}>
            <option value="asc">Aa-Zz</option>
            <option value="desc">Zz-Aa</option>
          </select>

          
          <Paginado
          countriesPerPage={countriesPerPage}
          allCountries={allCountries.length}
          paginado={paginado}
          />
          {currentCountries?.map((e) => {
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
    