import style from "./Profile.module.css"
import React, {FC} from "react";
import {ProfileType} from "../Data/Store";
import {Posts} from "./Posts/Posts";

type ProfilePropsType = {
    profile: ProfileType
    addCurrentPostText: (newPostText: string)=> void
    addPost: ()=> void
}
export const Profile: FC<ProfilePropsType> = (props) => {
    const newPostText = React.createRef<HTMLTextAreaElement>()
    const onChangeHandler = () => {
        if(newPostText.current?.value) {
            props.addCurrentPostText(newPostText.current?.value)
        }
    }
    return (
        <div>
            <div> ava+description</div>
            <div>
                <div>Myposts</div>
                <textarea
                    ref={newPostText}
                    onChange={onChangeHandler}
                    className={style.textitem}
                    value={props.profile.newPostText}
                ></textarea>
                <button onClick={props.addPost} className={style.button}>add post</button>
                <Posts profile={props.profile.posts}/>
            </div>
        </div>
    )
}