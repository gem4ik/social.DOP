import React from 'react';
import {DialogType} from "../../Types/Type";
import s from './Users.module.css'

export type UsersType = {
    users: DialogType[]
}

export const Users = (props: UsersType) => {
    return(
        <div className={s.users}>
            {props.users.map(el=>{
                return(
                    <div key={el.id}>{el.name}</div>
                )
            })}
        </div>
    )
}
