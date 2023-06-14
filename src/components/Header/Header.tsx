import React from 'react';
import s from './Header.module.css'

export const Header = () => {
    return (
        <div className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/200px-Linkedin.svg.png"
                 alt="logo"/>
        </div>
    );
};
