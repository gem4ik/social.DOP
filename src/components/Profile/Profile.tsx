import React from 'react';
import {Posts} from "./Posts/Posts";
import {ProfileType} from "../Types/Type";
import {AddPostArea} from "./AddPostArea/AddPostArea";

export type ProfilePropsType = {
    profile: ProfileType
    changeInputPostValue: (value: string)=> void
    addPost: ()=>void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <div>Profile</div>
            <div>ava+desc</div>
            <AddPostArea
                changeInputPostValue={props.changeInputPostValue}
                inputValue={props.profile.postValue}
                addPost={props.addPost}
            />
            <Posts posts={props.profile.posts} />
        </div>
    );
};