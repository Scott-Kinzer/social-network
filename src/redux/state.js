// import profileReducer from "./profile-reducers";
// import dialogReducer from "./dialog-reducers.ts";


let store = {
    _state : {
        profilePage: {
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
        },

        messagePage: {
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
    },
    renderEntireTree () {
        console.log("State was changed");
    },


    subscribe (observer)  {
        this.renderEntireTree = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = dialogReducer(this._state.messagePage, action)
        this.renderEntireTree()
    }
}




export default store;