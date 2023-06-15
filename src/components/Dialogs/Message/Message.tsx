import style from "./Message.module.css"
import {FC} from "react";
import {MessagesType} from "../../Data/Store";

type DialogsPropsType = {
    messages: Array<MessagesType>
}
export const Message : FC<DialogsPropsType> = (messages) => {
    return (
        <div >
            <div>
                {messages.messages.map((m) => {
                return <div className={style.messageContainer}>
                    <div className={style.message}>
                        <div className={style.messageHeader}>
                            <span className={style.messageSender}>John Doe</span>
                            <span className={style.messageTime}>12:30 PM</span>
                        </div>
                        <div className={style.messageBody}>
                            {m.message}
                        </div>
                    </div>
                </div>
            })}
            </div>
        </div>
    )
}


