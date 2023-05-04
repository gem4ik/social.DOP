import style from "./Message.module.css"
import {FC} from "react";
import {MessagesType} from "../../Data/Store";

type DialogsPropsType = {
    messages: Array<MessagesType>
}
export const Message : FC<DialogsPropsType> = (messages) => {
    return (
        <div >
            <div className={style.messages}>
                {messages.messages.map((m) => {
                return <div>{m.message}</div>
            })}
            </div>
        </div>
    )
}