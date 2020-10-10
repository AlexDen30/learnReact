import { authAPI } from "../api/api";

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

export const setAuthUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login,
        }
    }
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
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
                    dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login));
                }   
            });
    }
    
}

export default authReducer;