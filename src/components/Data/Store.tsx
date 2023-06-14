import {v1} from "uuid";

export type Poststype = {
    id: string
    post: string
    likeValue: number
}
export type ProfileType = {
    posts: Poststype[]
    newPostText: string
}
export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}
export type MessageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}
export type StateType = {
    Profile: ProfileType
    Message: MessageType
}
export type StoreType = {
    _State: StateType
    renderTree: () => void
    subscribe: (callback: () => void) => void
    getState: () => StateType
    addMessageText: (newMessageText: string) => void
    addMessage: () => void
    dispatch: (action: ActionTypes) => void
}

const Store: StoreType = {
    _State: {
        Profile: {
            posts: [
                {id: v1(), post: 'Hello, World', likeValue: 8},
                {id: v1(), post: "It's my first post", likeValue: 4},
                {id: v1(), post: "It's my first post", likeValue: 7}
            ],
            newPostText: ''
        },
        Message: {
            dialogs: [
                {id: v1(), name: 'Kseniya'},
                {id: v1(), name: 'Gleb'},
                {id: v1(), name: 'Vlad'},
                {id: v1(), name: 'Misha'},
                {id: v1(), name: 'Kostya'},
                {id: v1(), name: 'Vova'},
            ],
            messages: [
                {id: v1(), message: 'I'},
                {id: v1(), message: "don't"},
                {id: v1(), message: 'even'},
                {id: v1(), message: 'know'},
                {id: v1(), message: 'who'},
                {id: v1(), message: 'i'},
                {id: v1(), message: 'am'}
            ],
            newMessageText: ''
        }
    },
    addMessageText(newMessageText: string) {
        this._State.Message.newMessageText = newMessageText
        this.renderTree()
    },
    addMessage() {
        if (this._State.Message.newMessageText !== '') {
            let newMessage = {id: v1(), message: this._State.Message.newMessageText}
            this._State.Message.messages.push(newMessage)
            this._State.Message.newMessageText = ''
        }
        this.renderTree()
    },
    renderTree() {

    },
    subscribe(callback) {
        this.renderTree = callback
    },
    getState() {
        return this._State
    },
    dispatch(action: ActionTypes) {
        switch (action.type) {
            case 'ADD-CURRENT-POST-TEXT' : {
                this._State.Profile.newPostText = action.payload.newPostText
                return this.renderTree()
            }
            case 'ADD-POST' : {
                if (this._State.Profile.newPostText !== '') {
                    let newPost = {id: v1(), post: this._State.Profile.newPostText, likeValue: 0}
                    this._State.Profile.posts.push(newPost)
                    this._State.Profile.newPostText = ''
                }
                return this.renderTree()
            }
            case 'ADD-CURRENT-MESSAGE-TEXT' : {
                this._State.Message.newMessageText = action.payload.newMessageText
                return this.renderTree()
            }
            case 'ADD-MESSAGE' : {
                if (this._State.Message.newMessageText !== '') {
                    let newMessage = {id: v1(), message: this._State.Message.newMessageText}
                    this._State.Message.messages.push(newMessage)
                    this._State.Message.newMessageText = ''
                }
                return this.renderTree()
            }
            default:
                return this._State
        }
    }
}

export type  ActionTypes =
      ReturnType<typeof addCurrentPostTextAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof addMessageTextAC>
    | ReturnType<typeof addMessageAC>

export const addCurrentPostTextAC = (newPostText: string) => {
    return {
        type: 'ADD-CURRENT-POST-TEXT',
        payload: {newPostText}
    } as const
}
export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const addMessageTextAC = (newMessageText: string) => {
    return {
        type: 'ADD-CURRENT-MESSAGE-TEXT',
        payload: {newMessageText}
    } as const
}
export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}

export default Store