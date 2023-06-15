import style from "./Dialogs.module.css"
import {DialogsType, MessagesType} from "../Data/Store";
import {FC} from "react";
import {Input} from "./Input/Input";
import {Names} from "./Names/Names";
import {Message} from "./Message/Message";

type DialogsPropsType = {
    messages: MessagesType[]
    addMessage: (value:string)=>void
    users: DialogsType[]
}
export const Dialogs: FC<DialogsPropsType> = (props) => {
    
    return (
        <div className={style.dialogs}>
            <Names dialogs={props.users} />
            <Message messages={props.messages} />
            <Input
                addMessage={props.addMessage}
            />
        </div>
    )
}