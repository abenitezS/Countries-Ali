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
        const countryOrderPopulation = action.payload === 'asc' ?
            state.countriesall.sort((a,b)=>{
            if(a.population > b.population) return 1
            if(a.population < b.population) return -1  
            return 0;
        }) :
        state.countriesall.sort((a,b)=>{
            if(a.population > b.population) return -1
            if(a.population < b.population) return 1  
            return 0;
        })
        return({
            ...state,
            countries:countryOrderPopulation
           
        })
    }
    if (action.type==='ORDER_BY_NAME'){
        const countryOrden = action.payload === 'asc' ? 
            state.countriesall.sort((a,b)=>{
            if(a.name.toLowerCase() > b.name.toLowerCase()) return 1
            if(a.name.toLowerCase() < b.name.toLowerCase()) return -1
            return 0;
        }) : 
        
        state.countriesall.sort((a,b)=>{
            if(a.name.toLowerCase() > b.name.toLowerCase()) return -1
            if(a.name.toLowerCase() < b.name.toLowerCase()) return 1;
            return 0;
        })
        return({
            ...state,
            countries: countryOrden
            
        })
    }

     return state;
}
export default rootReducer;
