import {v1} from "uuid";

export type Poststype ={
    id: string
    post:string
    likeValue:number
}
export type ProfileType = {
    posts: Array<Poststype>
    newPostText: string
}
export type DialogsType= {
    id:number
    name:string
}
export type MessagesType= {
    id:number
    message:string
}
export type MessageType= {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}
export type StateType= {
    Profile:ProfileType
    Message:MessageType
}
export type StoreType= {
    _State: StateType
    addCurrentPostText: (newPostText: string)=>void
    addPost: ()=>void
    renderTree: ()=>void
    subscribe: (callback: ()=>void) => void
    getState: ()=> StateType
}

const Store: StoreType = {
    _State: {
    Profile: {
        posts: [
            { id: v1(), post: 'Hello, World', likeValue: 8 },
            { id: v1(), post: "It's my first post", likeValue: 4 },
            { id: v1(), post: "It's my first post", likeValue: 7 }
        ],
        newPostText: ''
    },
    Message: {
        dialogs: [
            { id: 1, name: 'Kseniya' },
            { id: 2, name: 'Gleb' },
            { id: 3, name: 'Vlad' },
            { id: 4, name: 'Misha' },
            { id: 5, name: 'Kostya' },
            { id: 6, name: 'Vova' },
        ],
        messages: [
            { id: 1, message: 'I' },
            { id: 2, message: "don't" },
            { id: 3, message: 'even' },
            { id: 4, message: 'know' },
            { id: 5, message: 'who' },
            { id: 6, message: 'i' },
            { id: 7, message: 'am' }
        ],
        newMessageText: ''
    }
},
    addCurrentPostText(newPostText: string){
        this._State.Profile.newPostText = newPostText
        this.renderTree()
    },
    addPost() {
        if (this._State.Profile.newPostText !== '') {
            let newPost = {id: v1(), post: this._State.Profile.newPostText, likeValue: 0}
            this._State.Profile.posts.push(newPost)
            this._State.Profile.newPostText = ''
        }
        this.renderTree()
    },
    renderTree(){

    },
    subscribe( callback){
        this.renderTree = callback
    },
    getState() {
        return this._State
    }

}

export default Store