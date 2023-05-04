import style from "./Header.module.css"

export function Header() {
    return (
        <header className={style.header}>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/200px-Linkedin.svg.png" alt="logo"/>
            </div>
        </header>
    )
}