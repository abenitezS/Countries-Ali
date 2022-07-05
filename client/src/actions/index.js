import axios from 'axios'

export function getCountries(){
    return async function(dispatch){
        var json= (await axios.get('http://localhost:3001/countries')).data;
        return dispatch({
            type:'GET_COUNTRIES',
            payload:json
        })
    }
}