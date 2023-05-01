import "./Dialogs.css"
import {MessageType} from "../Data/Store";

export const Dialogs:Function = (props: MessageType) => {
    return (
        <div>
            <div>------</div>
            <div>---{}---</div>
            <textarea className="textarea"
                      placeholder="your post">

            </textarea>
            <button className="button">send</button>
        </div>
    )
}