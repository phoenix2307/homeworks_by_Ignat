import React, {useState} from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header() {

    let [visible, setVisible] = useState(false)

    const visibleToggle = () => {
        setVisible(!visible)
    }
    return (
        <div>
            {
                !visible && <div
                  className={s.menuButton} onClick={visibleToggle}>
                  MENU
                </div>
            }

            {
                visible &&
                <div className={s.wrapper} onClick={visibleToggle}>
                  <div className={s.page}>
                    <NavLink to='/pre-junior'
                             className={(navActive) => navActive.isActive ? s.activeLink : ""}>preJunior</NavLink>
                  </div>
                  <div className={s.page}>
                    <NavLink to='/junior'
                             className={(navActive) => navActive.isActive ? s.activeLink : ""}>Junior</NavLink>
                  </div>
                  <div className={s.page}>
                    <NavLink to='/junior-plus'
                             className={(navActive) => navActive.isActive ? s.activeLink : ""}>Junior+</NavLink>
                  </div>
                </div>
            }

            {/*<div className={s.headerTwo}>*/}
            {/*    <div className={s.pageTwo}>preJunior</div>*/}
            {/*    <div className={s.pageTwo}>Junior</div>*/}
            {/*    <div className={s.pageTwo}>Junior+</div>*/}
            {/*    <div className={s.block}></div>*/}

            {/*</div>*/}

        </div>

    )
}

export default Header
