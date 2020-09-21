import * as React from "react"
import { Link } from "gatsby"
import ThemeChanger from "./ThemeChanger";
import NavLink from "../NavLink";
import { Helmet } from "react-helmet"

interface IHeader {
    siteTitle?: string
}

const Header: React.FC<IHeader> = ( { siteTitle } ) => (
    <>
        <Helmet>
            <link href="https://fonts.googleapis.com/css2?fammily=Fira+Code;family=Lato:wght@400;700&family=Poppins:wght@500;700&display=swap" rel="stylesheet"/>
        </Helmet>
        <header className={ "flex al__it--center px--md bg--bg h--header" }>
            <Link to={ "/" }>{ siteTitle }</Link>
            <nav className={ "ml--auto flex al__it--center" }>
                <NavLink to={ "/introduction" }>Documentation</NavLink>
                <ThemeChanger/>
            </nav>
        </header>
    </>
)

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
