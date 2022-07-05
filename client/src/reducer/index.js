   const initialState = {
    countriesall : []
   }

function  rootReducer (state = initialState, action) {
    if (action.type==='GET_COUNTRIES'){ 
            return {
                ...state,
                countriesall: action.payload,              
            }
        }
     return state;

}
export default rootReducer;
