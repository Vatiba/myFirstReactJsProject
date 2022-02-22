import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";


export let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, userMessage: "Hey, why nobody love me?", likeCount: 5 },
                { id: 2, userMessage: "It's our new Program! Hey!", likeCount: 10 },
            ],
            newPost: '',
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Dimych" },
                { id: 2, name: "Andrey" },
                { id: 3, name: "Sveta" },
                { id: 4, name: "Sasha" },
                { id: 5, name: "Viktor" },
                { id: 6, name: "Valera" }
            ],
            messages: [
                { id: 1, message: "Hey!", name: 'Dima'},
                { id: 2, message: "How is your itkamasutra?", name: 'Me'},
                { id: 3, message: "Hey why nobody love me?", name: 'Me'},
            ],
            newMessage: '',
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },

    dispatch(action){
        profileReducer(this._state.profilePage, action);
        dialogReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    },


    subscribe(observer) {
        this._callSubscriber = observer;
    },
}