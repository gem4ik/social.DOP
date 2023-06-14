export type PostType = {
    id:string
    title: string
    likesValue: number
}
export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type DialogsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    messageValue: string
}
export type ProfileType = {
    posts: PostType[]
    postValue: string
}
export type StateType = {
    Profile: ProfileType
    Dialogs: DialogsType
}
export type StoreType = {
    State: StateType
    rerenderTree: ()=>void
    subscribe: (callback:()=>void)=> void
    changeInputPostValue: (value: string)=> void
    addPost: ()=> void
    changeInputMessageValue: (value: string)=> void
    addMessage: ()=> void
}