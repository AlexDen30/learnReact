import { authAPI } from "../api/api";
import { stopSubmit } from 'redux-form';
import { setAuthUserDataThunkCreator } from "./auth-reducer";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS' 

let initialState = {
    initialized: false
}

export const initializedSuccessAC = () => {
    return {
        type: INITIALIZED_SUCCESS
    }
}

export const initializeThunkCreator = () => {

    return (dispatch) => {

       let promise = dispatch(setAuthUserDataThunkCreator());

       Promise.all([promise])
        .then (() => {
            dispatch(initializedSuccessAC());
        });
      
    }
    
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}


export default appReducer;