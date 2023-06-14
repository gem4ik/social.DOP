import {v1} from "uuid";
import {StoreType} from "../Types/Type";

export const Store: StoreType = {
    State: {
        Profile: {
            posts: [
                {id: v1(), title: 'Hello, World!', likesValue: 1},
                {id: v1(), title: 'Hello, country!', likesValue: 2},
                {id: v1(), title: 'Hello, city!', likesValue: 0}
            ],
            postValue: '',
        },
        Dialogs: {
            dialogs: [
                {id:v1(), name: "Katya"},
                {id:v1(), name: "Valera"},
                {id:v1(), name: "Dima"},
                {id:v1(), name: "Kirill"},
                {id:v1(), name: "Sergey"},
                {id:v1(), name: "Misha"},
                {id:v1(), name: "Katya"},
            ],
            messages: [
                {id:v1(), message:'Hello'},
                {id:v1(), message:'My name is'},
                {id:v1(), message:'Misha'},
                {id:v1(), message:'ya'},
                {id:v1(), message:'hz'},
                {id:v1(), message:'cho'},
                {id:v1(), message:'pisat'},
            ],
            messageValue: '',
        }
    },
    changeInputPostValue(value: string) {
        this.State.Profile.postValue = value
        this.rerenderTree()
    },
    addPost(){
        if (this.State.Profile.postValue.trim() !== '') {
            debugger
            const newPost = {id: v1(), title: this.State.Profile.postValue, likesValue: 0}
            this.State.Profile.posts.unshift(newPost)
            this.State.Profile.postValue = ''
        }
        this.rerenderTree()
    },
    changeInputMessageValue(value: string) {
        this.State.Dialogs.messageValue = value
        this.rerenderTree()
    },
    addMessage(){
        if (this.State.Dialogs.messageValue.trim() !== '') {
            debugger
            const newMessage = {id:v1(), message: this.State.Dialogs.messageValue }
            this.State.Dialogs.messages.push(newMessage)
            this.State.Dialogs.messageValue = ''
        }
        this.rerenderTree()
    },
    rerenderTree() {
    },
    subscribe(callback) {
        this.rerenderTree = callback
    },
}
