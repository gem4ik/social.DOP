import style from "./Names.module.css"
import {FC} from "react";
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../Data/Store";

type NamesPropsType= {
    dialogs: Array<DialogsType>
}
export const Names: FC<NamesPropsType> = (dialogs) => {
    return (
        <div>
            <div className={style.names}>
                {dialogs.dialogs.map((n) => {
                return <div><NavLink to ="/dialogs/*">{n.name}</NavLink></div>
            })}
            </div>
        </div>
    )
}