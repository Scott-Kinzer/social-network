
let store = {
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: "What's up?"},
                {id: 2, message: "What's up?"},
                {id: 3, message: "What's up?"},
                {id: 4, message: "What's up?"},
            ],
            text: " "
        },

        messagePage: {
            MessageData: [
                {message: "Hello how are you?" },
                {message: "Hello how are you?!!" },
                {message: "Hello how are you?!" },
                {message: "Hello how are you?!!!" },
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
            ]
        }
    },
    renderEntireTree () {
        console.log("State was changed");
    },
    addPost(postMessage)  {
        console.log(this._state.profilePage.posts);
        let newPost = {
            id: 5,
            message: postMessage,
        }

        this._state.profilePage.posts.push(newPost);
        this.changeText("");
        this.renderEntireTree();
    },
    changeText (text)  {
        this._state.profilePage.text = text;
        this.renderEntireTree();
    },

    subscribe (observer)  {
        this.renderEntireTree = observer;
    },
    getState() {
        return this._state;
    }
}

export default store;