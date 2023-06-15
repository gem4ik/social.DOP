import style from "./Profile.module.css"
import React, {ChangeEvent, FC, useState} from "react";
import {ActionTypes, addCurrentPostTextAC, addPostAC, Poststype, ProfileType} from "../Data/Store";
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    posts: Poststype[]
    addPost:(value: string)=>void
}
export const Profile: FC<ProfilePropsType> = (props) => {

    const [title, setTitle] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onClickHandler = () => {
        props.addPost(title)
    }

    return (
        <div>
            <ProfileInfo/>
            <div className={style.postContainer}>
                <div>My posts</div>
                <textarea
                    onChange={onChangeHandler}
                    className={style.textitem}
                    value={title}
                ></textarea>
                <button onClick={onClickHandler} className={style.button}>add post</button>
            </div>

                <Posts posts={props.posts}/>
        </div>
    )
}