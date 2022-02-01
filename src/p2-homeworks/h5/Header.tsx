import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/pre-junior'
                         className={(navActive) => navActive.isActive ? s.activeLink : ""}>preJunior</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/junior' className={(navActive) => navActive.isActive ? s.activeLink : ""}>Junior</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/junior-plus'
                         className={(navActive) => navActive.isActive ? s.activeLink : ""}>Junior+</NavLink>
            </div>
        </nav>
    )
}

export default Header
