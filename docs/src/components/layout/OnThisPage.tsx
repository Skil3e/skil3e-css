import * as React from "react";
import { FC } from "react";
import { SidebarLink } from "./Sidebar";

interface IOnThisPage {
    paths: {
        [key: string]: string
    }
}

const OnThisPage: FC<IOnThisPage> = ( { paths } ) => {
    return (
        <nav>
            <ul>
                <li className={ "text--bold text--uppercase p--10" }>On this Page</li>
                { Object.entries( paths ).map( ( [ key, value ] ) => (
                    <SidebarLink key={ key } to={ key }>{ value }</SidebarLink>
                ) ) }
            </ul>
        </nav>
    )
}

export default OnThisPage
