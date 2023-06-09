import React from 'react';
import style from 'Posts.module.css'
import {Poststype} from "../../Data/Store";

export type PostsPropsType = {
    profile: Poststype[]
}

export const Posts = (props: PostsPropsType) => {
    return (
        <div>
            {props.profile.map(el=>{
                return(
                    <div className={style.post}>
                        <div>
                            <img src="https://wow.zamimg.com/uploads/screenshots/small/661512.jpg" alt="ava"/>
                            {el.post}
                        </div>
                        <div>{el.likeValue}</div>
                    </div>
                )
            })}
        </div>
    )
}

// props.profile.posts.map((p) => {
//     return (<div className={style.post}>
//         <div>
//             <img src="https://wow.zamimg.com/uploads/screenshots/small/661512.jpg" alt="ava"/>
//             {p.post}
//         </div>
//         <div>{p.likeValue}</div>
//     </div>