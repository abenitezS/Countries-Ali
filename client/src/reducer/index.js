   const initialState = {
    countries : [],
    countriesall:[]
   }

function  rootReducer (state = initialState, action) {
    if (action.type==='GET_COUNTRIES'){ 
            return {
                ...state,
                countries: action.payload, 
                countriesall:action.payload             
            }
        }
    if (action.type==='FILTER_BY_CONTINENT'){ 
        const allCountries=state.countriesall
        const statusfiltered=action.payload==='All' ? allCountries : allCountries.filter(el=> el.continent===action.payload)
        return {
            ...state,
            countries: statusfiltered,              
        }
    }
    if (action.type==='ORDER_BY_POPULATION'){ 
        const countryOrderPopulation =  state.countriesall.sort((a,b)=>{
            if(a.population > b.population) return 1
            if(a.population < b.population) return -1  })
        
        return({
            ...state,
            countries:countryOrderPopulation
           
        })
    }





     return state;
}
export default rootReducer;
