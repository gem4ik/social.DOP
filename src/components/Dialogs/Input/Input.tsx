import style from "./Input.module.css"
import React, {ChangeEvent, useState} from "react";

export type InputPropsType = {
    addMessage: (value:string)=>void
}

export const Input = (props: InputPropsType) => {

    const [title, setTitle] = useState<string>('')


    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value) {
            setTitle(e.currentTarget.value)
        }
    }
    const onClickHandler = () => {
        props.addMessage(title)
    }

    return (
        <div className={style.inputArea}>
                <textarea
                    value={title}
                    onChange={(e)=>{onChangeHandler(e)}}
                    className={style.textarea}
                          placeholder="your message">
            </textarea>
            <button
                onClick={onClickHandler}
                className={style.button}>send</button>
        </div>
    )
}