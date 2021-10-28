const SET_USER_DATA = "SET_USER_DATA"


type initialStateType = {
    userId: null | number
    email: null | string
    login: null | string

}
let initialState: initialStateType = {
    userId: null,
    email: null,
    login: null
}

const AuthReducer = (state = initialState, action: any):initialStateType => {
    let stateCopy: initialStateType;
    switch (action.type) {
        case SET_USER_DATA:
            stateCopy = {...state,
                ...action.data,
            }
            return stateCopy
        default:
            return state;
    }
}

type AuthCreatorType = {
    type : "SET_USER_DATA"
    data: initialStateType
}


export let AuthCreator = (userId: number, email: string, login: string): AuthCreatorType => {
    return {
        type: "SET_USER_DATA",
        data: {
            userId,
            email,
            login, 
        }
    }
}


export default AuthReducer

