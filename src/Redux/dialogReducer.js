const ADD_MESSAGE = 'dialog/ADD-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: "Dimych", img: '' },
        { id: 2, name: "Andrey", img: '' },
        { id: 3, name: "Sveta", img: '' },
        { id: 4, name: "Sasha", img: '' },
        { id: 5, name: "Viktor", img: '' },
        { id: 6, name: "Valera", img: '' },
    ],
    messages: [
        { id: 1, message: "Hey!", name: 'Dimych', dialog_id: 1},
        { id: 2, message: "Hey! How are you?", name: 'Me', dialog_id: 1},
        { id: 3, message: "Hey why nobody love me?", name: 'Me', dialog_id: 1},
        { id: 4, message: "Hey!", name: 'Sveta', dialog_id: 3},
        { id: 5, message: "Hey! How are you?", name: 'Me', dialog_id: 3},
        { id: 6, message: "Hey why nobody love me?", name: 'Me', dialog_id: 4},
    ],
}

const dialogReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE: {
            let message = {
                id: 5,
                message: action.newMessage,
                dialog_id: action.dialogId,
                name: 'Me',
            }
            return {
                ...state,
                messages: [...state.messages, message],
            }
        }
        default:
            return state;
    }
}




export const addMessageCreater = (newMessage, dialogId) => {
    return { type: ADD_MESSAGE, newMessage, dialogId };
}


export default dialogReducer;