import style from "./Dialogs.module.css"
import {MessageType} from "../Data/Store";
import {FC} from "react";
import {Input} from "./Input/Input";
import {Names} from "./Names/Names";
import {Message} from "./Message/Message";

type DialogsPropsType = {
    message: MessageType
}
export const Dialogs: FC<DialogsPropsType> = (message) => {
    return (
        <div className={style.dialogs}>
            <Names dialogs={message.message.dialogs} />
            <Message messages={message.message.messages} />
            <Input />
        </div>
    )
}