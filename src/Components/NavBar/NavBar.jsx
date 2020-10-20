import React from 'react'
import Style from './NavBar.module.scss'
import { GiBeerBottle } from "react-icons/gi";
import { NavLink } from 'react-router-dom'
function NavBar() {
    return (
        <nav className={Style.navBar}>
            <h1 className={Style.navBarTitle}>Beer_Bottles(BB)<GiBeerBottle className={Style.icon} /> </h1>
            <ul className={Style.navBarList}>
                <NavLink to="/" exact style={{ textDecoration: "none", color: "#fff" }} activeClassName={Style.activeLink}> <li>Home</li></NavLink>
                <NavLink to="/myFavourates" exact style={{ textDecoration: "none", color: "#fff" }} activeClassName={Style.activeLink}><li>Favourates</li></NavLink>
            </ul>
        </nav>
    )
}

export default NavBar
