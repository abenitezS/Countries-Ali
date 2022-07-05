   const initialState = {
    countriesall : []
   }

   export const rootReducer  = (state = initialState, action) => {
    switch(action.type){

        case 'GET_COUNTRIES':
            return ({
                ...state,
                countriesall: action.payload,
               
            })

    default: return state;
}
}
