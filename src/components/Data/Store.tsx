export type Poststype ={
    id: number
    post:string
    likeValue:number
}
export type ProfileType = {
    posts: Array<Poststype>
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
}
export type StoreType= {
    Profile:ProfileType
    Message:MessageType
}

const Store: StoreType ={
    Profile: {
        posts: [
            { id: 1, post: 'Hello, World', likeValue: 8 },
            { id: 2, post: "It's my first post", likeValue: 4 },
            { id: 3, post: "It's my first post", likeValue: 7 }
        ]
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
        ]
    }
}

export default Store