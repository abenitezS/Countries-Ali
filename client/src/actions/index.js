import axios from 'axios'

export function getCountries(){
    return async function(dispatch){
        const {data}= await axios.get('http://localhost:3001/countries');
        return dispatch({ type:'GET_COUNTRIES', payload:data
        })
    }
}


export function postActivity(payload){
    return async function(dispatch){
        const data=await axios.post('http://localhost:3001/Activity',payload)
        console.log(data)
        return dispatch ({type:'POST_ACTIVIY',payload:data});
    }
}


export function getCountriesName(name){
    return async function(dispatch){
        try {
            const {data}=await(axios.get('http://localhost:3001/countries?name='+ name))
            return dispatch({
                type: "GET_NAME_COUNTRIES",
                payload : data
            })
        } catch (error) {
            console.log(error)   
        }      
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
        
        type:'ORDER_BY_POPULATION', payload: payload

        }
}
