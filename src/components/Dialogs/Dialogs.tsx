import style from "./Dialogs.module.css"
import {MessageType} from "../Data/Store";
import {FC} from "react";
import {Input} from "./Input/Input";
import {Names} from "./Names/Names";
import {Message} from "./Message/Message";

type DialogsPropsType = {
    message: MessageType
    addMessage: () => void
    addMessageText: (newMessageText: string) => void
}
export const Dialogs: FC<DialogsPropsType> = (props) => {
    return (
        <div className={style.dialogs}>
            <Names dialogs={props.message.dialogs} />
            <Message messages={props.message.messages} />
            <Input
                value={props.message.newMessageText}
                addMessageText={props.addMessageText}
                addMessage={props.addMessage}
            />
        </div>
    )
}