import style from "./Header.module.css"
import {NavLink} from "react-router-dom";

export function Header() {
    return (
        <header className={style.header}>
            <div>
                <NavLink
                    to="/profile"
                    className={style.item}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/200px-Linkedin.svg.png"
                         alt="logo"/>
                </NavLink>
            </div>
        </header>
    )
}