import axios from 'axios'

export function getCountries(){
    return async function(dispatch){
        const {data}= await axios.get('http://localhost:3001/countries');
        return dispatch({ type:'GET_COUNTRIES', payload:data
        })
    }
}

export function filterCountriesByContinent(payload){
    console.log(payload)
    return {
        
        type:'FILTER_BY_CONTINENT',
         payload
        }

}

//orden por alfabeto
export function OrderByName(payload) {
    return { type: 'ORDER_BY_NAME', payload: payload };
  }



export function ordersByPopulation(payload){
    
    return {
        
        type:'ORDER_BY_POPULATION',
         payload: null
        }

}
