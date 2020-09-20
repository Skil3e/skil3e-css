import * as React from "react"
import { Link } from "gatsby"

const Header = ( { siteTitle } ) => (
    <header className={"flex al__it--center px--md bg--bg h--header"}>
        <div>{ siteTitle }</div>
    </header>
)

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
