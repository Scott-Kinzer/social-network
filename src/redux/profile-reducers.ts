const UPDATE_PROFILE = "UPDATE_PROFILE"


type objPostType = {
    id: number,
    message: string
}
type initialStateType = {
    posts: Array<objPostType>
    text: string
    changeText: (value: string) => void
    profileData: string
}

let initialState: initialStateType = {
        posts: [
            {id: 1, message: "What's up?"},
            {id: 2, message: "What's up?"},
            {id: 3, message: "What's up?"},
            {id: 4, message: "What's up?"},
        ],
        text: " ",
        changeText (text)  {
            this.text = text;
        },
        profileData: ""
}

const profileReducer = (state = initialState, action: any) => {

    let stateCopy;
    switch (action.type) {
        case "ADD-POST":{
            let newPost = {
                id: 5,
                message: state.text,
            }

            stateCopy = {...state
                ,posts: [...state.posts, newPost],
                text: " "
            }
            return stateCopy
        }
        case "UPDATE-TEXT":
            stateCopy = {...state,
            text: action.text
            }

            return stateCopy;

        case UPDATE_PROFILE:

            return {...state, profileData: action.profileData
            }



        default:
            return state;
    }
}


 export let addPostik = () => {
     return {
         type: "ADD-POST"
     }
 }

 export let changeProfText = (text: string) => {
     return {
         type: "UPDATE-TEXT",
         text: text
     }
 }

export let setProfileData = (ProfileData: string) => {
    return {
        type: UPDATE_PROFILE,
        profileData: ProfileData
    }
}

export default profileReducer