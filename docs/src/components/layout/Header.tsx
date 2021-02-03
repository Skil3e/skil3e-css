import * as React from "react";
import { FC } from "react";
import Logo from "../Logo";
import { Link } from "gatsby";
import ThemeChanger from "./ThemeChanger";
import Github from "../Github";

interface IHeader {
    className?: string
}

const Header: FC<IHeader> = ( { className } ) => {
    return (
        <header className={ className }>
            <nav className={ "container flex--center w--100 px--lg" }>
                <Link className={ "flex--center text--text" } to={ "/" }>
                    <Logo className={ "mr--md" }/>
                    <span className={ "h3 mr--10 text--textDimmed none md:inline" }>skil3e SCSS</span>
                </Link>
                <ThemeChanger className={ "ml--md" }/>
                <Link className={ "ml--auto mr--md" } to={ "/docs" }>Documentation</Link>
                <Github/>
            </nav>
        </header>
    )
}

export default Header
