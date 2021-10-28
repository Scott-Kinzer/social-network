
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS = "SET_TOTAL_USERS"
const SET_BOOL_FETCH = "SET_BOOL_FETCH"

type initialStateType = {
    users: Array<any>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}


let initialState: initialStateType= {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
}

const UsersReducer = (state = initialState, action: any) => {

    let stateCopy;
    switch (action.type) {
        case FOLLOW:{
            stateCopy = {...state,
            users: state.users.map(user => {
                if (user.id === action.userID) {
                    return {...user, followed: true}
                }
                return user
                })
            }
            return stateCopy
        }
        case UNFOLLOW:
            stateCopy = {...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
            return stateCopy
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case SET_BOOL_FETCH:
            return {
                ...state,
                isFetching: action.fetchTrue
            }
        default:
            return state;
    }
}

export const follow = (userID: number) => {
    return {
        type: FOLLOW,
        userID
    }
}

export const unfollow = (userID : number) => {
    return {
        type: UNFOLLOW,
        userID
    }
}

export const setUsers = (users: number) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPage = (pageNum: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: pageNum
    }
}

export const SetTotalUsersCountF = (Users: number) => {
    return {
        type: SET_TOTAL_USERS,
        totalUsersCount: Users
    }
}


export const fetchFuncTrue = (boolSign : boolean) => {
    return {
        type: SET_BOOL_FETCH,
        fetchTrue: boolSign
    }
}



export default UsersReducer