import style from "./Input.module.css"
import React from "react";

export type InputPropsType = {
    addMessageText: (newMessageText: string) => void
    addMessage: () => void
    value: string
}

export const Input = (props: InputPropsType) => {

    const newMessageText = React.createRef<HTMLTextAreaElement>()
    const onChangeHandler = () => {
        if (newMessageText.current?.value) {
            props.addMessageText(newMessageText.current?.value)
        }
    }

    const onClickHandler = () => {
        props.addMessage()
    }
    return (
        <div className={style.inputArea}>
                <textarea
                    value={props.value}
                    onChange={onChangeHandler}
                    ref={newMessageText}
                    className={style.textarea}
                          placeholder="your message">
            </textarea>
            <button
                onClick={onClickHandler}
                className={style.button}>send</button>
        </div>
    )
}