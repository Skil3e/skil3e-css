import * as React from "react"
import { Link } from "gatsby"
import ThemeChanger from "./ThemeChanger";
import NavLink from "../NavLink";

const Header = ( { siteTitle } ) => (
    <header className={ "flex al__it--center px--md bg--bg h--header" }>
        <Link to={ "/" }>{ siteTitle }</Link>
        <nav className={"ml--auto flex al__it--center"}>
            <NavLink to={ "/documentation" }>Documentation</NavLink>
            <ThemeChanger/>
        </nav>
    </header>
)

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
