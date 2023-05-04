import style from "./Input.module.css"

export const Input = () => {
    return (
        <div className={style.inputArea}>
                <textarea className={style.textarea}
                          placeholder="your post">
            </textarea>
            <button className={style.button}>send</button>
        </div>
    )
}