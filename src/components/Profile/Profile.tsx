import "./Profile.css"
export const Profile:Function = () => {
    return(
        <div>
            <div> ava+description </div>
            <div>
                <div>Myposts</div>
                <textarea className="textitem"></textarea>
                <button className="button">add post</button>
                <div className="name">
                    <div><img src="https://wow.zamimg.com/uploads/screenshots/small/661512.jpg" alt="ava"/>post</div>
                    <div>Likes</div>
                </div>
            </div>
        </div>
    )
}