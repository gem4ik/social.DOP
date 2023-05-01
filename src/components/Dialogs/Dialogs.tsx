import "./Dialogs.css"
export function Dialogs() {
    return (
        <div>
            <div>Name</div>
            <div>Message</div>
            <textarea className="textarea"
                      placeholder="your post">

            </textarea>
            <button className="button">send</button>
        </div>
    )
}