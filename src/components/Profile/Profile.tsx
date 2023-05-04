import style from "./Profile.module.css"
import {FC} from "react";
import {ProfileType} from "../Data/Store";

type ProfilePropsType = {
    profile: ProfileType
}
export const Profile: FC<ProfilePropsType> = (profile) => {
    return (
        <div>
            <div> ava+description</div>
            <div>
                <div>Myposts</div>
                <textarea className={style.textitem}></textarea>
                <button className={style.button}>add post</button>
                {profile.profile.posts.map((p) => {
                    return (<div className={style.post}>
                            <div>
                                <img src="https://wow.zamimg.com/uploads/screenshots/small/661512.jpg" alt="ava"/>
                                {p.post}
                            </div>
                            <div>{p.likeValue}</div>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}