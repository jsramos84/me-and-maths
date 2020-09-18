import * as actionTypes from './actionTypes';

const initialState = {
    priceDatabase: null,
    request: {
       year: null,
       type: null 
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.INIT_PRICES:
            return {
                ...state,
                priceDatabase: action.data
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;