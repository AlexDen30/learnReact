import { authAPI } from "../api/api";
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA' 
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';

let initialState = {
    userId: null,
    email: null,
    login: null,
    ifFetching: false,
    isAuth: false
}


export const isFetchingAC = (isFetching) => {
    return {
        type: TOOGLE_IS_FETCHING,
        isFetching,
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    }
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        case TOOGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }    

        default:
            return state;
    }
}

export const setAuthUserDataThunkCreator = () => {

    return (dispatch) => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login, true));
                }   
            });
    }
    
}

export const loginThunkCreator = (email, password, rememberMe) => (dispatch) => {
    
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserDataThunkCreator());
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Err'; 
                    dispatch(stopSubmit("login", {_error: message}));
                }
            });
    }
    


export const logoutThunkCreator = () => {

    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));    
                }   
            });
    }
    
}

export default authReducer;