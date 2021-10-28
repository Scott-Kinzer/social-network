const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";
const SEND_MESSAGE = "SEND_MESSAGE";


type objMesType = {
    message: string
    id: number
}

type objDialogType = {
    name: string,
    id: number,
    img: string
}
type initialStateType = {
    MessageData: Array<objMesType>
    DialogData: Array<objDialogType>
    newMessageText: string
    changeTextTwo: (value: string) => void
}

let initialState: initialStateType= {
    MessageData: [
        {message: "Hello how are you?", id: 1},
        {message: "Hello how are you?!!",id: 2},
        {message: "Hello how are you?!", id: 3 },
        {message: "Hello how are you?!!!", id: 4 },
    ],
    DialogData: [
        {
            name: "Kate",
            id: 1,
            img: "space.jpg"
        },
        {
            name: "Andy",
            id: 2,
            img: "orange.jpg"
        },
        {
            name: "Bob",
            id: 3,
            img: "mountains.jpg"
        },
        {
            name: "Pop",
            id: 4,
            img: "space.jpg"
        },
    ],
    newMessageText: "",
    changeTextTwo (text)  {
        this.newMessageText= text;
    }
}

 const dialogReducer = (state = initialState, action: any) => {


    let stateCopy;
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
             stateCopy = {...state,
                 newMessageText: action.message
            }
            return stateCopy
        case SEND_MESSAGE:
            let body = state.newMessageText
             stateCopy = {
                ...state,
                MessageData: [...state.MessageData,
                    {id: 5,
                        message: body}
                ]
            }

            stateCopy.changeTextTwo("");
            return stateCopy
        default:
            return state;
    }
}

export let addMessageActionCreator = () => {
    return {
        type: "SEND_MESSAGE"
    }
}

export let changeMessageActionCreator = (text: string) => {
    return {
        type: "UPDATE_NEW_MESSAGE",
        message: text
    }
}

export default dialogReducer

