type Poststype ={
    id: number
    post:string
    likeValue:number
}
type ProfileType = {
    posts:Poststype
}
type DialogsType= {
    id:number
    name:string
}
type MessagesType= {
    id:number
    message:string
}
type MessageType= {
    dialogs: DialogsType
    message: MessagesType
}
export type StoreType= {
    Profile:ProfileType
    Message:MessageType
}

export const Store ={
    Profile: {
        posts: [
            { id: 1, post: 'Hello, World', likeValue: 8 },
            { id: 2, post: "It's my first post", likeValue: 4 },
            { id: 3, post: "It's my first post", likeValue: 7 }
        ]
    },
    Message: {
        dialogs: [
            { id: 1, name: 'Sasha' },
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