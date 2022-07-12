   const initialState = {
    countries : []
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
     return state;
}
export default rootReducer;
