import style from "./Nav.module.css"
import {NavLink} from "react-router-dom";

export function Nav() {
    return (
        <div className={style.nav}>
            <div>
                <NavLink
                    to="/profile"
                    className="item">Profile</NavLink>
            </div>
            <div>
                <NavLink
                    to="/dialogs"
                    className="item">Messages</NavLink>
            </div>
            <div>
                <NavLink
                    to="/news"
                    className="item">News</NavLink>
            </div>
            <div>
                <NavLink
                    to="/music"
                    className="item">Music</NavLink>
            </div>
            <div>
                <NavLink
                    to="/settings"
                    className="item">Settings</NavLink>
            </div>
        </div>
    )
}