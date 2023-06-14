import React from 'react';
import {PostType} from "../../Types/Type";

export type PostsPropsType ={
    posts: PostType[]
}

export const Posts = (props: PostsPropsType) => {
    return (
        <div>
            {props.posts.map(el=>{
            return(
                <div key={el.id}>{el.title}{el.likesValue}</div>
            )
        })}
        </div>
    );
};