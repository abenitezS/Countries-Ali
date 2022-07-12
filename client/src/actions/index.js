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