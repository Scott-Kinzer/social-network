import {renderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "What's up?"},
            {id: 2, message: "What's up?"},
            {id: 3, message: "What's up?"},
            {id: 4, message: "What's up?"},
        ]
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
}

export let addPost = (postMessage) => {
    console.log(state.profilePage.posts);
    let newPost = {
        id: 5,
        message: postMessage,
    }

    state.profilePage.posts.push(newPost);
    renderEntireTree(state, addPost);
}

export default state;